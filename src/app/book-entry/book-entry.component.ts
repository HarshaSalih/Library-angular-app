import { Component } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {

  Title=""
  Image=""
  Price=""
  Author=""
  Description=""
  Publisher=""
  Language=""
  Distributor=""
  ReleasedYear=""




  readvalues=()=>
  {
    let entry:any= {
      "Title":this.Title,
      "Image":this.Image,
      "Price":this.Price,
      "Author":this.Author,
      "Description":this.Description,
      "Publisher":this.Publisher,
      "Language":this.Language,
      "Distributor":this.Distributor,
      "ReleasedYear":this.ReleasedYear
      
    }

    console.log(entry)
  }

}
