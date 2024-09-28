import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";


@Injectable({providedIn: 'root'})
export class ApiService {


  constructor(private readonly httpClient: HttpClient) {
  }


  getData(): Observable<any> {
    return this.httpClient.get(`${environment.baseApiService}/users`);
  }
}
