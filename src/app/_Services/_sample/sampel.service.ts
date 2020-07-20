import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Sampel } from 'src/app/_Models/sampel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SampelService {

  url:string="http://localhost:4645/api/samples";
  constructor(private http:HttpClient) { }
  //get all sampels
  getAllResult(): Observable<any[]>
  {
    return this.http.get<any[]>(this.url);

  }
  //get by id
  getone(id)
  {
    return this.http.get(this.url+"/"+id);

  }
  //add Sampel
add(NewSampel:Sampel)
{
  return this.http.post(this.url,NewSampel);
}
//update Sampel
update(NewSampel:Sampel)
{
  return this.http.put(this.url+"/"+NewSampel.sampel_id,NewSampel);
}
//delete sampel
delet(Id:number)
{
  return this.http.delete(this.url+"/"+Id);
}

}
