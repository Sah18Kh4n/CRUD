import { Injectable } from '@angular/core';
import { Users } from '../Interface/users';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:3000";

  contentType ={
    headers : new HttpHeaders({
      'contentType' : 'application.json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<any>{
    return this.httpClient.get(this.url + '/users');
  }

  get(id:number): Observable<Users>{
    return this.httpClient.get<Users>(this.url + '/users/' + id )
  }

  createUser(users:Users):Observable<Users> {
    return this.httpClient.post<Users>(this.url + '/users', users)
  }

  deleteUser(id:number):Observable<Users>{
    return this.httpClient.delete<Users>(this.url + '/users/' + id)
  }

  // update(id:number, users:Users): Observable<Users>{
  //   return this.httpClient.put<Users>(this.url + '/users/' + id, users, this.contentType)
  // }

  update(user:Users): Observable<void>{
    return this.httpClient.put<void>(this.url + '/users/' + user.id, user)
  }
  // find(id:number):Observable<Users>{
  //   return this.httpClient.get<Users>(this.url + '/users/' + id)
  // }
}
