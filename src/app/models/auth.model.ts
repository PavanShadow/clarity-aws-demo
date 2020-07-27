import { EACCES } from 'constants';

export class AuthUser {
  public username: string;
  public password: string;
  public fullname: string;
  public email: string;
  public role: string;

  constructor(
    username: string,
    password: string,
    fullname: string,
    email: string,
    role: string
  ) {
    this.username = username;
    this.password = password;
    this.fullname = fullname;
    this.email = email;
    this.role = role;
  }
}
