import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

interface ITodo{
    text: string;
    done: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    url = `${environment}/home`;

    constructor(private http: HttpClient) {}
    
}