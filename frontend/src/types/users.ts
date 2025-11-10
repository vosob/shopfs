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
