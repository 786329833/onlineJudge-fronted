export class UserInfo {
  account: string;
  passwd: string;
  username: string;
  constructor(account: string, passwd: string, username: string) {
    this.account = account;
    this.passwd = passwd;
    this.username = username;
  }
}