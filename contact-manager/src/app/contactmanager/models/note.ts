export class Note {
  id: number;
  title: string;
  date: Date;

  constructor(id: number, title: string, date: Date) {
    this.id = id;
    this.title = title;
    this.date = date;
  }
}
