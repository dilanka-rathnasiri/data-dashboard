import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Person} from "../models/person";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:5000';

  getData(item: string) {
    return  this.http.get<Person[]>(`${this.apiUrl}/data/${item}`);
  }
}
