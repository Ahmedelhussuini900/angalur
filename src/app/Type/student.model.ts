// student.model.ts

export interface Address {
    street: string;
    city: string;
    zip: string;
    country: string;
  }
  
  export interface Student {
    id: number;
    name: string;
    age: number;
    gender: string;
    // address: Address;
    email: string;
    phone: string;
    courses: string[];
    gpa: number;
    image: string;
  }
  