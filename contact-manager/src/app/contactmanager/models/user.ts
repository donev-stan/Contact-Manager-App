import { Note } from './note';

export class User {
  id: number;
  birthDate: Date;
  name: string;
  avatarUrl: string;
  bio: string;

  notes: Note[];

  constructor(
    id: number,
    birthDate: Date,
    name: string,
    avatarUrl: string,
    bio: string,
    notes: Note[]
  ) {
    this.id = id;
    this.birthDate = birthDate;
    this.name = name;
    this.avatarUrl = avatarUrl;
    this.bio = bio;
    this.notes = notes;
  }
}
