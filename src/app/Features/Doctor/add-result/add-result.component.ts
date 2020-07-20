import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeesService} from 'src/app/_Services/_Employee/employees.service';
import {TestService} from 'src/app/_Services/_Test/test.service';
import {patientService} from 'src/app/_Services/_Patient/patient.service';
import {ResultService} from 'src/app/_Services/_Result/result.service';
import {ActivatedRoute} from '@angular/router';
import {SampelService} from 'src/app/_Services/_sample/sampel.service';
import {result} from 'src/app/_Models/result';
import {PhoneService} from 'src/app/_Services/_Phone/phone.service';
import {DepartmentService} from 'src/app/_Services/_Department/department.service';
import {PatientserviceService} from '../../../services/patientservice.service';
import {test} from "../../../_Models/test";
import {publicDecrypt} from "crypto";


@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.css']
})


export class AddResultComponent implements OnInit {
  public addresses: any[] = [];

constructor(private employeeservice: EmployeesService,
              private testService: TestService,
              private patientService: patientService,
              private sampleservice: SampelService,
              private resultservice: ResultService,
              private PhoneService: PhoneService,
              private DepartmentService: DepartmentService,
              private ActivatedRoute: ActivatedRoute, private service: PatientserviceService) {
    // this.numbers = Array(5).fill(0).map((x,i)=>i);

  }

  searchTerm: FormControl = new FormControl();

  ngOnInit(): void {
    this.searchTerm.valueChanges.subscribe(
      term => {
        if (term != '') {
          this.service.search(term).subscribe(
            data => {
              this.mypatients = data as any[];
              console.log(data[0].pat_f_name);
            });
        }
      });
    // 1 get test
    this.testService.getTests().subscribe((d: any[]) => {
      this.listtests = d
    });
    // 2 get patient
    // this.patientService.getpatients().subscribe((d:any[])=>{this.listpatients=d});
    // 3 get employee
    //  this.employeeservice.getAllEmployees().subscribe((d:any[])=>{this.listemployees=d});
    // 4 get sample
    //  this.sampleservice.getAllResult().subscribe((d:any[])=>{this.listsampleTests=d});
    //  id
    // this.id=this.ActivatedRoute.snapshot.paramMap.get("id");
    // 5 get old result
    this.resultservice.getResults().subscribe((d: any[]) => this.allResults = d);
    // DepartmentService
    this.DepartmentService.getAllDepartments().subscribe((d: any[]) => {
      this.Departments = d
    });
  }

  //
  search;
  numbers;
  mypatients = [];
  allResults = [];
  testResults: result[] = [];
  //
  form = new FormGroup({
    _pat_Id_fk: new FormControl('', Validators.required),
    _sam_Id_fk: new FormControl('', Validators.required),
    _emp_Id_fk: new FormControl('', Validators.required),
    _test_Id_fk: new FormControl('', Validators.required),
    _result_value: new FormControl('', Validators.required),
    _searchTerm: new FormControl('', Validators.required),
    _test_type: new FormControl('', Validators.required),
    _test_name: new FormControl('', Validators.required),
    btnAdd: new FormControl('', Validators.required),

  });

  get _Pat_Id_fk() {
    return this.form.get('_pat_Id_fk');
  }

  get _Sam_Id_fk() {
    return this.form.get('_sam_Id_fk');
  }

  get _Emp_Id_fk() {
    return this.form.get('_emp_Id_fk');
  }

  get _Test_Id_fk() {
    return this.form.get('_test_Id_fk');
  }

  get _Result_value() {
    return this.form.get('_result_value');
  }

  get _SearchTerm() {
    return this.form.get('_searchTerm');
  }

  get _Test_type() {
    return this.form.get('_test_type');
  }

  get _Test_name() {
    return this.form.get('_test_name');
  }

  get _btnadd() {
    return this.form.get('btnadd');
  }

  //
  pat_Id_fk: number;
  sam_Id_fk: number;
  emp_Id_fk: number;
  test_Id_fk: number;
  Result_value: string;
  test_name;
  id;
  oldResult;
  //  arrays
  listpatients = []
  listtests = []
  listsampleTests = []
  listemployees = []
  Departments = []
  listTestDepartments: any[] = [];



  patientobj;
  phoneobj;
  statuspatient = false;
  testdeptStatus = false;
  dep_Id;
  btndisabled = true;

  //
  getPosts(e) {
    console.log(e);
    this.patientobj = e;
    this.statuspatient = true;
    console.log(this.patientobj.pat_Id)
    console.log(this.statuspatient);
    this.search = "";
    this._SearchTerm.setValue("sokary");
  }

  test_nameStatus = true;


  changecheckbox(e) {
    console.log(e);
    this.form.controls['_test_name'].disable(e);
    // this.form.controls['_test_name'].enable(e);
    // console.log( this.form.controls['_test_name'].disabled);
    // this.test_nameStatus=false;
    // console.log(this.test_nameStatus)
    // this._Test_name.enabled.valueOf=e;
    // this._Test_name.
  }

  getdeptId(e) {
    // delete old items in array
    this.testdeptStatus = false;
    this.listTestDepartments = [];

    // get id
    this.dep_Id = e.target.value;
    if (this.dep_Id != null || this.dep_Id != 0) {
      // get tests
      for (let item of this.listtests) {
        console.log("--------")
        console.log(item.Dep_fk)
        console.log(this.dep_Id)
        if (item.Dep_fk == this.dep_Id) {
          console.log("==")
          this.listTestDepartments.push(item);
          console.log("pushed")

          console.log(item);
          console.log("success");

        }

      }
      // //
      for (let item of this.allResults) {
        console.log("00000000000000000");

        // console.log(item.test_Id_fk)
        // console.log(this.patientobj.test_Id_fk)
        if (item.pat_Id_fk == this.patientobj.pat_Id) {
          console.log("111111111111111111111111");
          //  console.log(item.pat_Id_fk)
          // console.log(this.patientobj.pat_Id)
          console.log(item)
          console.log(this.patientobj)
          item.Result_value = 0;
          this.testResults.push(item);
          console.log("push");
        }
        console.log("000000end000000");

      }
    }
    this.testdeptStatus = true;
    // this.form.controls['btnEdit'].enabled;
    // this.btndisabled=false;
    // this.form.controls['btnadd'].setValue("Add Results");
    // this.form.valid;
  }

  //
  getpatientId(e) {
    console.log(e.target.value);
    // this.pat_Id_fk=e.target.value;
  }

  //
  getTestId(e) {
    this.test_Id_fk = e.target.value;
  }

  getemployeeId(e) {
    this.emp_Id_fk = e.target.value;
  }

  //
  getsampleId(e) {
    this.sam_Id_fk = e.target.value;
  }

  //
  result1: result;
  result_id;

  addResult() {
    console.log("adddddddddddddd")
    console.log(this.addresses)
    for (let item of this.testResults) {
      this.result1 = new  result(this.result_id , item.pat_Id_fk , item.sam_Id_fk , item.emp_Id_fk , item.test_Id_fk , item.Result_value);
      // this.result1 = new result(item.pat_Id_fk, item.sam_Id_fk, item.emp_Id_fk, item.test_Id_fk, item.Result_value ,this.result_id);
      this.resultservice.addResult(this.result1);
      //  alert("ok");
    }
  }

}


