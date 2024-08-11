export class User {
  id: string;
  email: string;
  info: string;

  constructor(id: string, email: string, info: string) {
    this.id = id;
    this.email = email;
    this.info = info;
  }
}
