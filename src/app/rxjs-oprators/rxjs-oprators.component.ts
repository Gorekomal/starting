import { Component, OnInit } from '@angular/core';
import { filter, from, map, of, pipe } from 'rxjs';

@Component({
  selector: 'app-rxjs-oprators',
  templateUrl: './rxjs-oprators.component.html',
  styleUrls: ['./rxjs-oprators.component.css']
})
export class RxjsOpratorsComponent implements OnInit {
public StreamData:any;
  constructor() { }

  ngOnInit(): void {
    this.StreamData=from([1,2,3,4,5,6,7,8,9])
      console.log(this.StreamData);
   
      // this.StreamData =of([1,2,3,4,5,6,7,8,9]);
      // console.log(this.StreamData);

      this.StreamData.subscribe((res:any)=>{
        console.log(res);
      })

      this.StreamData. pipe(map((k:any)=>k*9),

      filter((G:any)=> G%2==0)).subscribe((res:any)=>{
        console.log(res);
      })

  }

}
