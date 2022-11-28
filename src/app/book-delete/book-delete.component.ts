import { Component } from '@angular/core';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent {

  delete=""

  deleteValue=()=>
  {
    //let delete:any={"search":this.delete}
    console.log(this.delete)
  }



}
