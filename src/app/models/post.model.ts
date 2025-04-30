export class Post {
  private _id: number;
  private _title: string;
  private _content: string;
  private _author: string;
  private _date: Date;

  constructor(id: number, title: string, content: string, author: string, date: Date) {
    this._id = id;
    this._title = title;
    this._content = content;
    this._author = author;
    this._date = date;
  }

  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }

  get content(): string {
    return this._content;
  }
  set content(value: string) {
    this._content = value;
  }

  get author(): string {
    return this._author;
  }
  set author(value: string) {
    this._author = value;
  }

  get date(): Date {
    return this._date;
  }
  set date(value: Date) {
    this._date = value;
  }
}
