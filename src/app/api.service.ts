import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchBook=()=>
  {
    return this.http.get("http://localhost:8080/view")
  }

  addBook=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/add",dataToSend)
  }

  searchBook=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/search",dataToSend)
  }

  deleteBook=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/delete",dataToSend)
  }

  // userRegistration=(dataToSend:any)=>
  // {
  //   return this.http.post("http://localhost:8080/delete",dataToSend)
  // }
}
