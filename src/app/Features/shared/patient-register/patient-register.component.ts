import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { patient } from 'src/app/_Models/patient';
import { patientService } from 'src/app/_Services/_Patient/patient.service';
import { DispatcherService } from 'src/app/_Services/_Dispatcher/dispatchers.service';
import { PhoneService } from 'src/app/_Services/_Phone/phone.service';
import { dispatcher } from 'src/app/_Models/dispatcher';
import { phone } from 'src/app/_Models/phone';
import { async } from '@angular/core/testing';
import { promise } from 'protractor';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {

  constructor(private patientService:patientService,private dispatcherService:DispatcherService,private phoneservice:PhoneService) { }

  ngOnInit(): void {
this.getDispatchers();
// this.addpatient();
// this.getPatients();
// this.promiseobj;
  }
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  form=new FormGroup({
    dispatcher_Id:new FormControl('',Validators.required),
    Patient_fname:new FormControl('',Validators.required),
    Patient_lname:new FormControl('',Validators.required),
    Patient_gender:new FormControl('',Validators.required),

    Patient_age:new FormControl('',Validators.required),
    Patient_date:new FormControl('',Validators.required),
    Patient_password:new FormControl('',Validators.required),
    Patient_address:new FormControl('',Validators.required),
    Patient_email:new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),

    Phone_number:new FormControl('',Validators.required),

  });
  // s - c

  get Dispatcher_Id(){
    return this.form.get('dispatcher_Id');
  }
get patient_fname(){
  return this.form.get('Patient_fname');
}
get patient_lname(){
  return this.form.get('Patient_lname');
}
get patient_gender(){
  return this.form.get('Patient_gender');
}
get patient_age(){
  return this.form.get('Patient_age');
}
get patient_date(){
  return this.form.get('Patient_date');
}
get patient_password(){
  return this.form.get('Patient_password');
}
get patient_address(){
  return this.form.get('Patient_address');
}
get patient_email(){
  return this.form.get('Patient_email');
}
get phone_num(){
  return this.form.get('Phone_number');
}


// dis_Id:any;

    fName;
    lName;
    gender;
    age;
    date;
    password;
    email;
    address;

    phoneNum;

    dis_Id;
  getdispatcherId(e){
      this.dis_Id=e.target.value;
      console.log(  e);
      }

    dispatchers;
    getDispatchers(){
      // console.log(" this first name "+this.patient_fname.value);
   let res= this.dispatcherService.getAllDispatchers().subscribe(data=>{
         this.dispatchers=data;
      }

);
}
phone:phone;
patients;
maxid_patient:number;
// 1 getmax id in patient
// getPatients(){
//   this.patientService.getpatients().subscribe(d=>this.patients=d);
//   // console.log(this.patients.length);

// }
//
//  getMaxId(){
//   this.maxid_patient=this.patients[this.patients.length].pat_Id;
//   // for (let index = 0; index < this.patients.length; index++) {
//   //   const element = patients[index];

//   // }
// }
patient:patient;
  UserID_fk:string;
addpatient(){
// this.getDispatchers();
  // this.getPatients();
  // this.getMaxId();
  // max id for
  this.patient=new patient(this.maxid_patient,this.fName,this.lName,this.gender,this.age,this.dis_Id,this.date,this.password,this.address,this.email,this.UserID_fk);
 this.patientService.addpatient(this.patient);
 console.log(this.maxid_patient);
//  this.phone = new phone(this.phoneNum,this.patient.pat_Id);
// this.phoneservice.addPhone(this.phone);

}
// promise
//  promiseobj= new Promise(this.getDispatchers).then(this.getPatients).then(this.getMaxId).then(this.addpatient);

// //
// const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
//   resolutionFunc(777);
// });
// // At this point, "promiseA" is already settled.
// promiseA.then( (val) => console.log("asynchronous logging has val:",val) );
// console.log("immediate logging");



}
