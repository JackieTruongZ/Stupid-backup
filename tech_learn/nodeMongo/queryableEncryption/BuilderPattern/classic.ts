class User {
    private firstName: string;
    private lastName: string;
    private age: number;
    private email: string;
    private phoneNumber: string;
  
    private constructor(builder: UserBuilder) {
      this.firstName = builder.firstName;
      this.lastName = builder.lastName;
      this.age = builder.age;
      this.email = builder.email;
      this.phoneNumber = builder.phoneNumber;
    }
  
    // Getters...
  
    static Builder(firstName: string, lastName: string): UserBuilder {
      return new UserBuilder(firstName, lastName);
    }
  }
  
  class UserBuilder {
    private firstName: string;
    private lastName: string;
    private age: number;
    private email: string;
    private phoneNumber: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    age(age: number): UserBuilder {
      this.age = age;
      return this;
    }
  
    email(email: string): UserBuilder {
      this.email = email;
      return this;
    }
  
    phoneNumber(phoneNumber: string): UserBuilder {
      this.phoneNumber = phoneNumber;
      return this;
    }
  
    build(): User {
      return new User(this);
    }
  }
  
  const user = User.Builder("John", "Doe")
    .age(30)
    .email("john.doe@example.com")
    .phoneNumber("1234567890")
    .build();