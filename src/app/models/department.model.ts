export class Department {
  public depId: string;
  public depName: string;
  public depHead: string;

  constructor(depId: string, depName: string, depHead: string) {
    this.depId = depId;
    this.depName = depName;
    this.depHead = depHead;
  }
}
