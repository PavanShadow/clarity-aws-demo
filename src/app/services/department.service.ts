import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {

  constructor(public http: HttpClient) {}

  public getDepartments() {
    return this.http.get(environment.baseUrl + 'departments');
  }
}
