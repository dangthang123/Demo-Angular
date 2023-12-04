import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Profile } from '../Interface/profile';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  buttonSubject: Subject<any> = new Subject();
  buttonObservable = this.buttonSubject.asObservable();

  constructor(private httpClient: HttpClient) { }
  getAll() {
    return this.httpClient.get<Profile[]>('http://localhost:3000/profile');
  }
  create(data: Profile) {
    return this.httpClient.post<any>('http://localhost:3000/profile', {
      ...data,
    });
  }
}
