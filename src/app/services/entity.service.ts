import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class EntityService{
  constructor(private http: HttpClient){ }
  apiUrl: string;

  create(entity: any): any{
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.apiUrl, JSON.stringify(entity), {headers: myHeaders});
  }

  read(): any{
    return this.http.get(this.apiUrl);
  }

  update(entity: any): any{
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.apiUrl, JSON.stringify(entity), {headers: myHeaders});
  }

  delete(id: number): any{
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
