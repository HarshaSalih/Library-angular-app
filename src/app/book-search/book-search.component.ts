import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {

  constructor(private api:ApiService){}
  bookTitle=""
  searchData:any=[]
  readValues=()=>
  {
    let data:any={"bookTitle":this.bookTitle}
    console.log(data)
    this.api.searchBook(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.length==0) {
          alert("Invalid book name")
          
        } else {
          this.searchData=response
          
        }
      }
    )
    
  }


  readValue=(id:any)=>
  {
    let data:any={
      "id": id
  }
  this.api.deleteBook(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if(response.status=="success")
      {
        alert("Deleted succesfully")
        this.searchData=[]
        
        
      }
    }
  )

}
}
