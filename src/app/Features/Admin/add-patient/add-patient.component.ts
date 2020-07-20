import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {patient} from 'src/app/_Models/patient';
import {patientService} from 'src/app/_Services/_Patient/patient.service';
import {DispatcherService} from 'src/app/_Services/_Dispatcher/dispatchers.service';
import {PhoneService} from 'src/app/_Services/_Phone/phone.service';
import {phone} from 'src/app/_Models/phone';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  constructor(private patientService: patientService,
              private dispatcherService: DispatcherService,
              private phoneservice: PhoneService) {
  }

  ngOnInit(): void {
    this.getDispatchers();
// this.addpatient();
// this.getPatients();
// this.promiseobj;
  }

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  disableSelect = new FormControl(false);
  form = new FormGroup({
    dispatcher_Id: new FormControl('', Validators.required),
    Patient_fname: new FormControl('', Validators.required),
    Patient_lname: new FormControl('', Validators.required),
    Patient_gender: new FormControl('', Validators.required),

    Patient_age: new FormControl('', Validators.required),
    Patient_date: new FormControl('', Validators.required),
    // Patient_password: new FormControl('', Validators.required),
    Patient_address: new FormControl('', Validators.required),
    Patient_email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),

    Phone_number: new FormControl('', Validators.required),

  });

  get Dispatcher_Id() {
    return this.form.get('dispatcher_Id');
  }

  get patient_fname() {
    return this.form.get('Patient_fname');
  }

  get patient_lname() {
    return this.form.get('Patient_lname');
  }

  get patient_gender() {
    return this.form.get('Patient_gender');
  }

  get patient_age() {
    return this.form.get('Patient_age');
  }

  get patient_date() {
    return this.form.get('Patient_date');
  }

  get patient_password() {
    return this.form.get('Patient_password');
  }

  get patient_address() {
    return this.form.get('Patient_address');
  }

  get patient_email() {
    return this.form.get('Patient_email');
  }

  get phone_num() {
    return this.form.get('Phone_number');
  }


// dis_Id:any;
  pat_Id:number;
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

  getdispatcherId(e) {
    this.dis_Id_fk = e.target.value;
    console.log(e);
  }

  dispatchers;

  getDispatchers() {
    // console.log(" this first name "+this.patient_fname.value);
    let res = this.dispatcherService.getAllDispatchers().subscribe(data => {
        this.dispatchers = data;
      }
    );
  }

  patient;
  addpatient() {
    this.patient = new patient(this.pat_Id, this.pat_f_name, this.pat_l_name, this.pat_gender, this.pat_age, this.dis_Id_fk, this.pat_email, this.pat_address, this.pat_date, this.pat_phone,this.UserID_fk);
    this.patientService.addpatient(this.patient);
    //console.log(this.maxid_patient);
//  this.phone = new phone(this.phoneNum,this.patient.pat_Id);
// this.phoneservice.addPhone(this.phone);
  }

  getgender(e) {
    this.pat_gender = e.target.value;
  }
}
