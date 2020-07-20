import { Component, OnInit } from '@angular/core';
import { DispatcherService } from 'src/app/_Services/_Dispatcher/dispatchers.service';
import { dispatcher } from 'src/app/_Models/dispatcher';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-dispature',
  templateUrl: './add-dispature.component.html',
  styleUrls: ['./add-dispature.component.css']
})
export class AddDispatureComponent implements OnInit {

  constructor(private dispatcherService:DispatcherService) { }

  ngOnInit(): void {
 //this.AddDispatcher();
  }
  // object
  form=new FormGroup({
    dis_name:new FormControl('',Validators.required),
    dis_phone:new FormControl('',Validators.required),
  });
get DisName(){
  return this.form.get('dis_name');
}
get DisPhone(){
  return this.form.get('dis_phone');
}
  
      dispatcher:dispatcher;
      dis_Id :number;
      disName :string;
      disPhone:string;
      //pat_Id:number=null;

 AddDispatcher(){
  this.dispatcher=new dispatcher(this.dis_Id,this.disName,this.disPhone);

   this.dispatcherService.addDispatcher(this.dispatcher);
 }

}
