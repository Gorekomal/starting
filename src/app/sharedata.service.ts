import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {

  constructor(private http: HttpClient) { 
    
  }
  getPromiseData(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/').toPromise();
  }
}
