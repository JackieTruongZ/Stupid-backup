import * as mongoose from 'mongoose';

class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connection: mongoose.Connection;

  private constructor() {
    // Khởi tạo private constructor
    this.connection = mongoose.connection;
  }

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  public getConnection(): mongoose.Connection {
    return this.connection;
  }
}

// Sử dụng Singleton để lấy kết nối cơ sở dữ liệu
const dbConnection = DatabaseConnection.getInstance();
const db = dbConnection.getConnection();

// Định nghĩa schema cho collection "users"
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
});

// Tạo model từ schema
const User = db.model('User', userSchema);

// Kết nối tới MongoDB
db.on('connected', () => {
  console.log('Connected to MongoDB');

  // Tạo một bản ghi mới
  const newUser = new User({
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
  });

  // Lưu bản ghi vào cơ sở dữ liệu
  newUser.save()
    .then(() => {
      console.log('User created');

      // Truy vấn danh sách các người dùng
      User.find()
        .then((users) => {
          console.log('Users:', users);

          // Đóng kết nối tới MongoDB
          db.close()
            .then(() => {
              console.log('Disconnected from MongoDB');
            })
            .catch((error) => {
              console.error('Error disconnecting from MongoDB:', error);
            });
        })
        .catch((error) => {
          console.error('Error querying users:', error);
        });
    })
    .catch((error) => {
      console.error('Error creating user:', error);
    });
});

// Kết nối tới MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});