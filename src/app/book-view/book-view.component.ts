import { Component } from '@angular/core';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent {
  book:any=[
    {
      "Title":"The lord of the rings",
      "Image":"https://orion-uploads.openroadmedia.com/sm_f7e651-tolkien-lordoftherings.jpg",
      "Price":700
    },
  {
    "Title":"The great gatsby",
      "Image":"https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
      "Price":800
  },
  {
    "Title":"The catcher in the rye",
      "Image":"https://m.media-amazon.com/images/I/51nXxz0taHL.jpg",
      "Price":900
  },
  {
    "Title":"Jane Eyre",
      "Image":"https://m.media-amazon.com/images/I/61c1BiBgvdL.jpg",
      "Price":850
  },
  {
    "Title":"Pride and prejudice",
      "Image":"https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg",
      "Price":900
  }
  ]

}
