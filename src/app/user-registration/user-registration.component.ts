import { Component } from '@angular/core';

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


  userRegister=()=>
  {
    let register:any={"name":this.name,"aadharNo":this.aadharNo,"address":this.address,"pincode":this.pincode,"dob":this.dob,"email":this.email,"phone":this.phone,"userName":this.userName,"password":this.password,"confirmPassword":this.confirmPassword}
    console.log(register)
  }

  


}
