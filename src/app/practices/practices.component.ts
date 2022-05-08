import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practices',
  templateUrl: './practices.component.html',
  styleUrls: ['./practices.component.css']
})
export class PracticesComponent implements OnInit {

  public name :string='komal';
  public Link:any;
  public firstname:any;
   age=25;
   public EmpData:any;

    arrays=['red','blue','white','black']

    choose:any=1;
  
  constructor() { }

  ngOnInit(): void {
    this.Link="https://www.bing.com/search?q=gogle&form=ANNTH1&refig=229081a258dd4145b20f2ec067028edc";
  
  this.EmpData=[
      {img:'https://th.bing.com/th/id/OIP.ur9pGVAJsKIhPh8eSlfNWAHaHa?pid=ImgDet&rs=1',name:'Mobile' , id:1, salary:5000},
      {img:'https://rukminim2.flixcart.com/image/416/416/kz4gh3k0/computer/d/w/o/x415ka-ek111ws-thin-and-light-laptop-asus-original-imagb7gsfubu98vz.jpeg?q=70',name:'laptop' , id:1,  salary:15000},
      {img:'https://media.fozdoo.com/2020/03/71EwLHcuuJL._AC_SL1500_.jpg',name:'Tv' ,     id:1,   salary:15000}
    ]
  }
  onsubmited(){
    console.log("this is komal");
  }
  addstyle(){
    return{
      'font-size':'20px',
      'font-style':'italic',
      'color':'green'
    }
 
  }
}
