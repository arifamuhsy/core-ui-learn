import { FormControl } from "@angular/forms";

export class toDoListForm {
    id = new FormControl('')
    toDo = new FormControl('')
    time = new FormControl('')
}

export interface toDoListInterface {
  id?: string;
  toDo: string;
  time: string;
}
