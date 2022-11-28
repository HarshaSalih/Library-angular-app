import { Component } from '@angular/core';

@Component({
  selector: 'app-administrator-login',
  templateUrl: './administrator-login.component.html',
  styleUrls: ['./administrator-login.component.css']
})
export class AdministratorLoginComponent {

  userName=""
  password=""

  readValues=()=>
  {
    let data:any={
      "userName":this.userName,"password":this.password
    }
    console.log(data)

    if (this.userName=="admin" && this.password=="12345") {
      alert("valid login")
      
    } else {
      alert("invalid credentials")
      
    }
  }

}
