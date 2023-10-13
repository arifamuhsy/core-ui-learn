import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { constant } from "src/environments/constant";
import { toDoListInterface } from "../models/toDoLists.models";

@Injectable({providedIn: 'root'})
export class toDoListService {
  constructor(
    private http: HttpClient
  ){}

  getToDoList(): Observable<toDoListInterface[]>{
    return this.http.get<toDoListInterface[]>(`${constant.toDo}`);
  }
}
