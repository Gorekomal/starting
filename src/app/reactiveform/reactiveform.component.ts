import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  isSubmitted:boolean=false;
  public myForm:any;
  constructor( private fc:FormBuilder) { }

  ngOnInit(): void {
    this.myForm=this.fc.group({
     sfname:['',[Validators.required]] ,
     slname:['',[Validators.required]],
     email:['',[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
     sphone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]],
     spass:['',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]]
      })
  }
get f(){
  return this.myForm.controls;
}
OnSubmited(){
 console.log(this.myForm);
console.log(this.myForm.value)
this.isSubmitted=true;

}

}
