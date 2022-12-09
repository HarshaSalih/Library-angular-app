import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  name=""
  aadharNo=""
  address=""
  pincode=""
  dob=""
  email=""
  phone=""
  userName=""
  password=""
  confirmPassword=""

  constructor(private api:ApiService){}


  readValues=()=>
  {
    let data:any={"name":this.name,"aadharNo":this.aadharNo,"address":this.address,"pincode":this.pincode,"dob":this.dob,"email":this.email,"phone":this.phone,"userName":this.userName,"password":this.password,"confirmPassword":this.confirmPassword}
    console.log(data)

    if(this.password==this.confirmPassword)
    alert("Registered successfully")
    this.name=""
    this.aadharNo=""
    this.address=""
    this.pincode=""
    this.dob=""
    this.email=""
    this.phone=""
    this.userName=""
    this.password=""
    this.confirmPassword=""
    
  }

  


}
