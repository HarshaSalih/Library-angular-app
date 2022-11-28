import { Component } from '@angular/core';

@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css']
})
export class BookIssueComponent {

  name=""
  bookTitle=""
  dateOfIssue=""
  membershipNo=""


  issueValues=()=>
  {
    let issue:any={"name":this.name,"bookTitle":this.bookTitle,"dateOfIssue":this.dateOfIssue,"membershipNo":this.membershipNo}
    console.log(issue)
    
  }

}
