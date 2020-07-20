import {Component, OnInit} from '@angular/core';
import {patientService} from 'src/app/_Services/_Patient/patient.service';
import {DispatcherService} from 'src/app/_Services/_Dispatcher/dispatchers.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {patient} from 'src/app/_Models/patient';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  constructor(private patientservice: patientService, private dispatcher: DispatcherService, private ActivatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.editEmployee();
    //let promise_obj=new Promise(()=>{
    this.pat_Id = this.ActivatedRoute.snapshot.paramMap.get("id");

    // }).then(()=>{
    this.patientservice.getpatient(this.pat_Id).subscribe(d => this.oldpatient = d);
    this.dispatcher.getAllDispatchers().subscribe(d => this.dispatchers = d);
    // console.log(this.oldEmp.job_Id_fk);
    // console.log(this.jobs);
    // console.log(res);
    //}).then(()=> console.log(this.oldEmp));
  }

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  form = new FormGroup({
    // empl_Id:new FormControl('',Validators.required),
    patf_name: new FormControl('', Validators.required),
    patl_name: new FormControl('', Validators.required),
    patgender: new FormControl('', Validators.required),
    patage: new FormControl('', Validators.required),
    patdate: new FormControl('', Validators.required),
    //patpassword: new FormControl('', Validators.required),
    pataddress: new FormControl('', Validators.required),
    patmail: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    dispatcher: new FormControl('', Validators.required),

  });
  // get Empl_Id(){
  //   return this.form.get( 'empl_Id');
  // }
  get Patf_name() {
    return this.form.get('patf_name');
  }

  get Patl_name() {
    return this.form.get('patl_name');
  }

  get Patgender() {
    return this.form.get('patgender');
  }

  get Patage() {
    return this.form.get('patage');
  }

  get Patdate() {
    return this.form.get('patdate');
  }

  get Patpassword() {
    return this.form.get('patpassword');
  }

  get Pataddress() {
    return this.form.get('pataddress');
  }

  get Patmail() {
    return this.form.get('patmail');
  }

  get Dispatcher() {
    return this.form.get('dispatcher');
  }

  oldpatient;
  // id;
  // dispatcher_name
  // ---------
  pat_Id;
  pat_f_name:string;
  pat_l_name:string;
  pat_gender:string;
  pat_age:number;
  dis_Id_fk:number;
  pat_email:number;
  pat_address:string;
  pat_date:Date;
  pat_phone:string;
  UserID_fk:string;

  //------------

  getdispatcherId(e) {
    this.dis_Id_fk = e.target.value;
  }

  dispatchers;
  dispatcher_Id;
  patient: patient;
  // Result

  editPatient() {
    this.patient = new patient(this.pat_Id, this.pat_f_name, this.pat_l_name, this.pat_gender, this.pat_age, this.dis_Id_fk, this.pat_email, this.pat_address, this.pat_date, this.pat_phone,this.UserID_fk);
    this.patientservice.editpatient(this.pat_Id, this.patient);
    // console.log(this.Result);
  }


}
