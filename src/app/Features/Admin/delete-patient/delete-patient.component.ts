import { Component, OnInit } from '@angular/core';
import { patientService } from 'src/app/_Services/_Patient/patient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css']
})
export class DeletePatientComponent implements OnInit {

  constructor(private patientservice:patientService, private Route:ActivatedRoute) { }

  ngOnInit(): void {
this.getPatient();

  }
  getPatient(){
    this.patientId =+this.Route.snapshot.paramMap.get("id");

    this.patientservice.getpatient(this.patientId).subscribe(d=>this.patient=d);
  }

  Result
  patientId:any;
  patient;
  DeletePatient(){
    this.Result=this.patientservice.deletepatient(this.patientId);
    console.log(this.Result);
  }

// -----------------------------


}
