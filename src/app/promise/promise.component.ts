import { Component, OnInit } from '@angular/core';

import { SharedataService } from '../sharedata.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor(private share:SharedataService) { }


  iphone12(){
    return false
  }
  iwatchseries6(){
    return true
  }
  NotAvilable(){
   
  }

  iphone={
   'color':'gray',
   'RAM':'8GB',
   'size':'5.4inch'
  }

  iwatch={
    'color':'Black',
    'prize':'41000rs',
    'Belt-Size':'41mm'

  }

  NotAvailable={
   Status: 'Not in Stock'
  }
  ngOnInit(): void {
    // const prom = new Promise(function(resolve,reject){
    //   setTimeout(()=>{
    //     resolve("promise resolve");
    //     reject("promise reject");
    //   },4000);
    // });

    // prom.
    // then ((value:any)=>{
    //   console.log("promise  is executed" +value);
    //  })
    //  .catch ((value:any)=>{
    //    console.log("promise not executed"+value);

    //  })


     const Brand= new Promise((resolve,reject)=>{
       if(this.iphone12()){
         return setTimeout(()=>{
           resolve(this.iphone);
           },4000)
       }
       else if(this.iwatchseries6()){
       return setTimeout(()=>{
         resolve(this.iwatch);
       },4000)
         
       }
       else{
return setTimeout(()=>{
  reject(this.NotAvailable);
})
       }
     })

  //  this.getPromiseAPIData();
  Brand
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  })
  }

    }
    // getPromiseAPIData(){
    //    this.share.getPromiseData()
    //    .then((res:any)=>{
    //      console.log(res);
    //      })

    //      .catch((err:any)=>{
    //       console.log(err);
    //    })
    //    }


   
   

  



