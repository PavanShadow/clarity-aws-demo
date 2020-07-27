import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User;
  constructor(public http: HttpClient) {}

  public getUsers() {
    return this.http.get(environment.baseUrl + 'users');
  }

  public async uploadUser(user: User): Promise<any> {
    return this.http.post<any>(environment.baseUrl + 'user', user).toPromise();
  }

  public async updateUser(userId: string, user: User): Promise<any> {
    return this.http
      .put<any>(environment.baseUrl + `user/${userId}`, user)
      .toPromise();
  }
}
