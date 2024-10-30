interface IStorage {

    getStorageType(): string

}

interface IProcessor {

    attachStorage(storage: IStorage): string

    showSpecs(): string

}


class MacbookProcessor implements IProcessor {

    storage: string | undefined

    MacbookProcessor() {
        console.log("Macbook is built using apple silicon chips")
    }

    attachStorage(storageAttached: IStorage) {
        this.storage = storageAttached.getStorageType()
        console.log("storageAttached", storageAttached.getStorageType())
        return this.storage + " Attached to Macbook"
    }
    showSpecs(): string {
        return this.toString()
    }

    toString(): string {
        return "AppleProcessor is created using Apple Silicon and " + this.storage;
    }

}


class MacbookStorage implements IStorage {

    storageSize: number

    constructor(storageSize: number) {
        this.storageSize = storageSize
        console.log(this.storageSize + " GB SSD is used")
    }

    getStorageType() {
        return this.storageSize + "GB SSD"
    }

}