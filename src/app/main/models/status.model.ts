export class Status {
  contest: number;
  id: number;
  language: string;
  memory: number;
  problem: string;
  problemtitle: string;
  result: number;
  submittime: string;
  time: number;
  user: string;
  constructor(id: number, user: string, language: string, memory: number, time: number, submittime: string, result: number, problemtitle: string) {
    this.id = id;
    this.user = user;
    this.language = language;
    this.memory = memory;
    this.time = time;
    this.submittime = submittime;
    this.result = result;
    this.problemtitle = problemtitle;
  }
}
