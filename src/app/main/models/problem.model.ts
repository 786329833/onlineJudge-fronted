export class Problem {
  id: string;
  title: string;
  tag: string;
  score: number;
  level: number;
  submission: number;
  accept: number;
  percent: number;
  constructor(id: string, title: string, tag: string, score: number, level: number, submission: number, accept: number) {
    this.id = id;
    this.title = title;
    this.tag = tag;
    this.score = score;
    this.submission = submission;
    this.level = level;
    this.accept = accept;
    this.percent = submission === 0 ? 0 : Number((this.accept / this.submission).toFixed(2));
  }
}
