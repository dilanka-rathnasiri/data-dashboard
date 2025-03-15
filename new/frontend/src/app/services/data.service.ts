import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";
import {Person} from "../models/person";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  basePath: string = "http://localhost:5000"

  constructor(private http: HttpClient) { }

  callBackendApi(id: string): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.basePath}/data/${id}`).pipe(delay(5000));
  }
}
