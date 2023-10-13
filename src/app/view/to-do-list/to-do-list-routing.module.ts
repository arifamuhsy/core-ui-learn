import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListDetailComponent } from 'src/app/main/to-do-list/to-do-list-detail/to-do-list-detail.component';
import { ToDoListMainComponent } from 'src/app/main/to-do-list/to-do-list-main/to-do-list-main.component';

const routes: Routes = [
  {
    path: '',
    component: ToDoListMainComponent,
    data: {
      title: 'To Do List'
    }
  },
  {
    path: 'update/:id',
    component: ToDoListDetailComponent,
    data: {
      title: 'update'
    }
  },
  {
    path: 'view/:id',
    component: ToDoListDetailComponent,
    data: {
      title: 'view'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoListRoutingModule { }
