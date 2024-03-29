import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

interface ITodo {
    text: string;
    done: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class TodoFetchService {
    private baseUrl = `${environment.apiUrl}/todos`;

    constructor(private http: HttpClient) {}

   getTodos(): Observable<ITodo> {
        return this.http.get<ITodo>(this.baseUrl);
    } 

}