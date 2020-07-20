import { Component, OnInit } from '@angular/core';
import { DispatcherService } from 'src/app/_Services/_Dispatcher/dispatchers.service';

@Component({
  selector: 'app-delete-dispatcher',
  templateUrl: './delete-dispatcher.component.html',
  styleUrls: ['./delete-dispatcher.component.css']
})
export class DeleteDispatcherComponent implements OnInit {

 
  constructor(private dispatcherService:DispatcherService) { }

  ngOnInit(): void {

  this.DeleteDispatcher();
  }
  
  Result
  disId:any;
  DeleteDispatcher(){
    this.Result=this.dispatcherService.deleteDispatcher(this.disId);
    console.log(this.Result);
  }

}
