import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
public Name='sai baba';
public student={
  'firstname':'komal',
  'surname':'gore',
  'age':21
}
public salary=500000;
today=Date();
  constructor() { }

  ngOnInit(): void {
  }

}
