import { FormControl } from "@angular/forms";

export class toDoListForm {
    toDo = new FormControl('')
    time = new FormControl('')
}

export interface toDoListInterface {
  id?: string;
  todo: string;
  time: string;
}
