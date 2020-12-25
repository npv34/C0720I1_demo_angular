import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  url = 'http://api.tinhocdongian.com/api'

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get<any>(this.url + '/groups')
  }

  add(data): Observable<any> {
    return this.http.post<any>(this.url + '/groups/create', data)
  }

  delete(id): Observable<any> {
    return this.http.delete<any>(this.url + '/groups/' + id + '/delete')
  }
}
