import { Component } from '@angular/core';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent {

  edit=""

  editValues=()=>
  {
    let edit:any={"edit":this.edit}
    console.log(edit)

  }

}
