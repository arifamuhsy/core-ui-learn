import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { toDoListForm, toDoListInterface } from 'src/app/models/toDoLists.models';
import { toDoListService } from 'src/app/service/toDoList.service';
import { Location } from '@angular/common';
import { normalizeFlag } from '../../../utils/input-utils'

@Component({
  selector: 'app-to-do-list-detail',
  templateUrl: './to-do-list-detail.component.html',
  styleUrls: ['./to-do-list-detail.component.scss']
})
export class ToDoListDetailComponent {
  form: FormGroup
  toDo: toDoListInterface[] = [];
  id?: number;


  constructor(
    private formBuilder: FormBuilder,
    private toDoService: toDoListService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ){
    this.form = this.formBuilder.group(new toDoListForm())
  }

  ngOnInit(){
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'))

    this.toDoService.getToDo(this.id)
    .subscribe((response: toDoListInterface)=>{
      this.form.patchValue(response)
    })
  }

  submitForm(){
    this.toDoService.updateToDoList(this.id, normalizeFlag(this.form))
    .subscribe(()=>{
      this.location.back();
    })
  }

  back(){
    this.location.back();
  }
}
