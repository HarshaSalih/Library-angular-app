import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {

  bookTitle=""
  author=""
  description=""
  publisher=""
  language=""
  distributor=""
  releasedYear=""
  price=""
  image=""

  constructor(private api:ApiService){}


  readvalues=()=>
  {
    let data:any= {"bookTitle":this.bookTitle,"author":this.author,"description":this.description,"publisher":this.publisher,"language":this.language,"distributor":this.distributor,"releasedYear":this.releasedYear,"price":this.price,"image":this.image}
    console.log(data)

    this.api.addBook(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success")
        {
          alert("Patient added successfully")
          this.bookTitle=""
          this.author=""
          this.description=""
          this.publisher=""
          this.language=""
          this.distributor=""
          this.releasedYear=""
          this.price=""
          this.image=""
        }
        else{
          alert("Something went wrong")
        }
      }
    )
  }



}
