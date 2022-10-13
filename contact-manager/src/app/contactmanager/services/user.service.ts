import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _users: BehaviorSubject<User[]>;

  private dataStore: {
    users: User[];
  };

  constructor(private http: HttpClient) {
    this.dataStore = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  userById(id: number) {
    console.log(this.dataStore.users);
    return this.dataStore.users.find((u) => u.id === id);
  }

  addUser(user: User): Promise<User> {
    console.log(user);

    return new Promise<User>((resolve, reject) => {
      user.id = this.dataStore.users.length + 1;
      this.dataStore.users.push({ ...user });
      this._users.next(Object.assign({}, this.dataStore).users);
      resolve(user);
    });
  }

  loadAll() {
    const usersUrl = 'https://angular-material-api.azurewebsites.net/users';

    return this.http.get<User[]>(usersUrl).subscribe(
      (data) => {
        this.dataStore.users = data;
        this._users.next(Object.assign({}, this.dataStore).users);
      },
      (error) => {
        console.error('Failed to retrieve data');
        console.error(error);
      }
    );
  }
}
