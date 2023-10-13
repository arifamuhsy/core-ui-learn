import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { constant } from "src/environments/constant";
import { toDoListInterface } from "../models/toDoLists.models";


const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({providedIn: 'root'})
export class toDoListService {
  constructor(
    private http: HttpClient
  ){}

  getToDoList(): Observable<toDoListInterface[]>{
    return this.http.get<toDoListInterface[]>(`${constant.toDo}`);
  }

  updateToDoList(id: any,form: any): Observable<toDoListInterface[]>{
    return this.http.put<toDoListInterface[]>(`${constant.toDo}/${id}`, form, HttpOptions);
  }

  createToDoList(form: any): Observable<any>{
    return this.http.post<any>(`${constant.toDo}`, form,HttpOptions);
  }

  deleteToDoList(id: toDoListInterface): Observable<toDoListInterface>{
    return this.http.delete<toDoListInterface>(`${constant.toDo}/${id.id}`);
  }

  getToDoById(id: toDoListInterface): Observable<toDoListInterface>{
    return this.http.get<toDoListInterface>(`${constant.toDo}/${id.id}`);
  }

  getToDo(id: number): Observable<toDoListInterface>{
    return this.http.get<toDoListInterface>(`${constant.toDo}/${id}`);
  }
}
