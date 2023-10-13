import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListMainComponent } from './to-do-list-main/to-do-list-main.component';
import { SharedBaseModule, SharedFormModule } from 'src/app/shared';
import { ButtonModule,CardModule, GridModule,TableModule, UtilitiesModule } from '@coreui/angular';



@NgModule({
  declarations: [
    ToDoListMainComponent
  ],
  imports: [
    SharedBaseModule,
    SharedFormModule,
    CardModule,
    GridModule,
    TableModule,
    UtilitiesModule,
    ButtonModule
  ]
})
export class ToDoListModule { }
