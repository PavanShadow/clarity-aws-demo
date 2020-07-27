export class User {
  public userId: string;
  public name: string;
  public department: string;

  constructor(userId: string, name: string, department: string) {
    this.userId = userId;
    this.name = name;
    this.department = department;
  }
}
