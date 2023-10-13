import { NgModule } from '@angular/core';

import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { ToDoListModule } from 'src/app/main/to-do-list/to-do-list.module';


@NgModule({
  declarations: [],
  imports: [
    ToDoListRoutingModule,
    ToDoListModule
  ]
})
export class ToDoListParentModule { }
