const { MongoClient, Binary } = require("mongodb");
const { ClientEncryption } = require("mongodb-client-encryption");

const keyVaultNamespace = "encryption.__keyvault";
const secretDB = "secretDB";
const secretCollection = "secretCollection";
const uri = "mongodb+srv://datnguyentruongnn:datnguyentruongnn@@poca.kzc5eti.mongodb.net/?retryWrites=true&w=majority";

async function run() {
    const keyVaultClient = new MongoClient(uri);
    await keyVaultClient.connect();
    const keyVaultDB = keyVaultClient.db("encryption");
    await keyVaultDB.dropDatabase();
    const keyVaultColl = keyVaultDB.collection("__keyvault");
    await keyVaultColl.createIndex(
        { keyAltNames: 1 },
        { unique: true, partialFilterExpression: { keyAltNames: { $exists: true } } }
    );
    const localMasterKey = require("fs").readFileSync("./cmk.txt");
    const kmsProviders = { local: { key: localMasterKey } };
    const clientEnc = new ClientEncryption(keyVaultClient, {
        keyVaultNamespace: keyVaultNamespace,
        kmsProviders: kmsProviders
    });
    const dek = await clientEnc.createDataKey("local", { keyAltNames: ["dek"] });
    const encryptedFieldsMap = {
        ["secretDB.secretCollection"]: {
            fields: [
                {
                    keyId: dek,
                    path: "secretField",
                    bsonType: "int",
                    queries: { queryType: "equality" },
                }
            ]
        }
    };
    const extraOptions = { cryptSharedLibPath: "<MONGO_CRYPT_LIB_PATH>" };
    const encClient = new MongoClient(uri, {
        autoEncryption: {
            keyVaultNamespace,
            kmsProviders,
            extraOptions,
            encryptedFieldsMap
        }
    });
    await encClient.connect();
    const newEncDB = encClient.db(secretDB);
    await newEncDB.dropDatabase();
    await newEncDB.createCollection(secretCollection);
    await keyVaultClient.close();
    await encClient.close();
    console.log("Successfully created DEK and encrypted collection.");
}

run().catch(console.dir);