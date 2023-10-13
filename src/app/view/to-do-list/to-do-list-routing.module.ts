import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListMainComponent } from 'src/app/main/to-do-list/to-do-list-main/to-do-list-main.component';

const routes: Routes = [
  {
    path: '',
    component: ToDoListMainComponent,
    data: {
      title: 'To Do List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoListRoutingModule { }
