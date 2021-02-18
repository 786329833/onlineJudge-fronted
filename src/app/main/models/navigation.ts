export class Navigation {
  name: string;
  enName: string;
  iconUrl: string;
  clickEvent: Function;
  constructor(name: string, enName: string, iconUrl: string, event: Function) {
    this.name = name;
    this.enName = enName;
    this.iconUrl = iconUrl;
    this.clickEvent = event;
  }
}
