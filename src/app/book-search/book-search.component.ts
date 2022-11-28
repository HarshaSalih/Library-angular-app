import { Component } from '@angular/core';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {

  search=""


  searchValues=()=>
  {
    let search:any={"search":this.search}
    console.log(search)
  }

}
