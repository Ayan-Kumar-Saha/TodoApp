import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(
    private http: HttpClient
  ) { }

  getTodoList() {
    let url = `${environment.API_BASE_URL}getTodo`;
    return this.http.get(url);
  }

  updateTodoStatus(todo) {
    let url = `${environment.API_BASE_URL}updateStatus`;
    return this.http.post(url, todo);
  }
}
