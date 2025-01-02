import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://127.0.0.1:3000/user/';
  constructor(private http: HttpClient) { }

  login( data: any){
    return this.http.post( this.url + 'signin', data );
  }

  register( data: any){
    return this.http.post( this.url + 'signup', data );
  }

  isLoggedIn(){

    let token = localStorage.getItem('token');
    if(token){
      return true;
    }else{
      return false;
    }

  }
  getUserDataFromToken(){
    let token = localStorage.getItem('token');

    if(token){

      let codedData = token.split('.')[1];
      console.log('1',codedData)
      
      let decodedData = window.atob(codedData);
      

      console.log('2',decodedData)

      let data = JSON.parse(decodedData);
      console.log('3', data);

      return data;

      // return JSO.parse( window.atob( token.split('.')[1]))
    }
  }
}
