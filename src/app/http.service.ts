import { HttpClient } from '@angular/common/http';
import { Injectable, inject,signal } from '@angular/core';
import { IEmployee } from './user';

import { registerconfirm } from './_model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
    apiUrl = 'https://localhost:7004/';

    constructor(private http: HttpClient) {}


    getAll(): Observable<IEmployee[]> {
      return this.http.get<IEmployee[]>(`${this.apiUrl}/api/Employee`);
    }
  create(user: IEmployee): Observable<IEmployee> {

    return this.http.post<IEmployee>(`${this.apiUrl}/api/Employee`, user);
  }
  update(user: IEmployee): Observable<IEmployee> {
    return this.http.put<IEmployee>(`${this.apiUrl}/api/Employee${user.id}`, user);
  }

}
