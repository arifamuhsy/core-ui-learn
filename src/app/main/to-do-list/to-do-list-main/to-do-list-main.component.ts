import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { toDoListForm, toDoListInterface } from 'src/app/models/toDoLists.models';
import { toDoListService } from 'src/app/service/toDoList.service';

@Component({
  selector: 'app-to-do-list-main',
  templateUrl: './to-do-list-main.component.html',
  styleUrls: ['./to-do-list-main.component.scss']
})
export class ToDoListMainComponent {

  form: FormGroup;
  toDo: toDoListInterface[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private toDoService: toDoListService
  ){
    this.form = this.formBuilder.group(new toDoListForm())
  }

  ngOnInit(){
    this.getToDoList();
  }

  getToDoList(){
    this.toDoService.getToDoList()
    .subscribe((a) =>{
      this.toDo = a;
    })
  }

  submitForm(){}
}
