import * as mongoose from 'mongoose';

interface DatabaseConnector {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
}

class MongoDBConnector implements DatabaseConnector {
  private uri: string;

  constructor(uri: string) {
    this.uri = uri;
  }

  async connect(): Promise<void> {
    await mongoose.connect(this.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  }

  async disconnect(): Promise<void> {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

class DatabaseConnectorFactory {
  createConnector(type: string, uri: string): DatabaseConnector {
    if (type === 'mongodb') {
      return new MongoDBConnector(uri);
    } else {
      throw new Error('Invalid database type');
    }
  }
}

// Sử dụng Factory Pattern để tạo đối tượng MongoDBConnector
const factory = new DatabaseConnectorFactory();

const connector = factory.createConnector('mongodb', 'mongodb://localhost:27017/mydatabase');

connector.connect()
  .then(() => {
    // Logic xử lý sau khi kết nối thành công với MongoDB
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Logic xử lý của ứng dụng

connector.disconnect()
  .then(() => {
    // Logic xử lý sau khi ngắt kết nối với MongoDB
  })
  .catch((error) => {
    console.error('Error disconnecting from MongoDB:', error);
  });