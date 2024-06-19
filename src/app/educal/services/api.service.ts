import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { backendUrl } from './constants';
type basicobject = {
  [key: string]: string | number | null;
};
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = backendUrl;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
  getCourses(): Observable<any> {
    return this.http.get<any>(this.url + '/course/getCourses');
  }
  getCourse(courseid: string): Observable<any> {
    return this.http.post<any>(this.url + '/course/getCourse', {
      courseid: courseid,
    });
  }
}
