import { Component } from '@angular/core';

@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css']
})
export class BookIssueComponent {

  name=""
  Title=""
  dateOfIssue=""
  membershipNo=""


  readValues=()=>
  {
    let data:any={"name":this.name,"Title":this.Title,"dateOfIssue":this.dateOfIssue,"membershipNo":this.membershipNo}
    console.log(data)
    
  }

}
