import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { toDoListForm, toDoListInterface } from 'src/app/models/toDoLists.models';
import { toDoListService } from 'src/app/service/toDoList.service';
import { normalizeFlag } from '../../../utils/input-utils'
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-list-main',
  templateUrl: './to-do-list-main.component.html',
  styleUrls: ['./to-do-list-main.component.scss']
})
export class ToDoListMainComponent {

  form: FormGroup;
  toDo: toDoListInterface[] = [];
  idView: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private toDoService: toDoListService,
    private router: Router
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

  submitForm(){
    this.toDoService.createToDoList(normalizeFlag(this.form))
    .subscribe(()=>{
      this.getToDoList();
    });
  }

  deleteData(id: toDoListInterface){
    this.toDoService.deleteToDoList(id)
    .subscribe(()=>{
      (this.toDo=this.toDo?.filter((s)=>{
        s.id !== id.id
      }))
      this.getToDoList()
    })
  }

  async updateData(id: toDoListInterface){
    let idv
    this.toDoService.getToDoById(id)
    .subscribe(()=>{
      (this.toDo=this.toDo?.filter((s)=>{
        s.id !== id.id
        // idv = s.id
        // console.log(s.id)
        // console.log(id.id)
      }))
    })
    // console.log(idv)
    await this.router.navigate([`/to-do-list/update/${id.id}`])
  }


}
