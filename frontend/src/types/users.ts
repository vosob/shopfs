// ! перейменувати типи на capitalize

export interface userRegister {
  email: string;
  name: string;
  phone: string;
  city: string;
  password: string;
}

export interface userRegisterData {
  accessToken: string;
}

export interface userLogin {
  email: string;
  password: string;
}

export interface userLoginData {
  accessToken: string;
}

export interface userMe {
  city: string;
  createdAt: string;
  email: string;
  id: string;
  name: string;
  password: string;
  phone: string;
  updatedAt: string;
}
