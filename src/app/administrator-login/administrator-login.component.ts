import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrator-login',
  templateUrl: './administrator-login.component.html',
  styleUrls: ['./administrator-login.component.css']
})
export class AdministratorLoginComponent {

  userName=""
  password=""

  constructor (private route:Router){}

  readValues=()=>
  {
    let data:any={
      "userName":this.userName,"password":this.password
    }
    console.log(data)

    if (this.userName=="admin" && this.password=="12345") {
      this.route.navigate(['/entry'])
      
    } else {
      alert("invalid credentials")
      
    }
  }

}
