import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormControl, Validators } from '@angular/forms';
  import { EmployeesService } from 'src/app/_Services/_Employee/employees.service';
  import { TestService } from 'src/app/_Services/_Test/test.service';
  import { patientService } from 'src/app/_Services/_Patient/patient.service';
  import { ResultService } from 'src/app/_Services/_Result/result.service';
  import { ActivatedRoute } from '@angular/router';
  import { SampelService } from 'src/app/_Services/_sample/sampel.service';
  import { result } from 'src/app/_Models/result';
  import { PhoneService } from 'src/app/_Services/_Phone/phone.service';
  import { DepartmentService } from 'src/app/_Services/_Department/department.service';
// import { BillService } from 'src/app/_Services/_Bill/bill.service';
// import { Bill } from 'src/app/_Models/bill';
import {BillService} from '../../../../app/_Services/_Bill/bill.service';
import {Bill} from '../../../_Models/bill';
import {PatientserviceService} from '../../../services/patientservice.service';
import {DispatcherService} from "../../../_Services/_Dispatcher/dispatchers.service";
import {getDate} from "ngx-bootstrap/chronos/utils/date-getters";


@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css']
})
export class AddBillComponent implements OnInit {
  // myDate = new Date().getDate();
  // myd = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');


  constructor( private employeeservice:EmployeesService,
                  private testService:TestService,
                  private BillService:BillService,
                  private patientService:patientService,
                   private sampleservice:SampelService,
                   private resultservice:ResultService,
                    private PhoneService:PhoneService,
                  private DepartmentService:DepartmentService,
                    private DispatcherService:DispatcherService,
                    private ActivatedRoute:ActivatedRoute , private service: PatientserviceService )
       {
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
          this.testService.getTests().subscribe((d:any[])=>{this.listtests=d});
        // 2 get patient
        // this.patientService.getpatients().subscribe((d:any[])=>{this.listpatients=d});
     // 3 get employee
    //  this.employeeservice.getAllEmployees().subscribe((d:any[])=>{this.listemployees=d});
     // 4 get sample
    //  this.sampleservice.getAllResult().subscribe((d:any[])=>{this.listsampleTests=d});
    //  id
    // this.id=this.ActivatedRoute.snapshot.paramMap.get("id");
        // 5 get old result
        this.resultservice.getResults().subscribe((d:any[])=>this.allResults=d);
            // DepartmentService
            this.DepartmentService.getAllDepartments().subscribe((d:any[])=>{this.Departments=d});
            this.DispatcherService.getAllDispatchers().subscribe((d:any[])=>{this.dispatchers=d});
   }



  get _Patient_date() {
    return this.form.get('Patient_date');
  }
  //
    search;
    numbers;
    mypatients=[];
    allResults=[];
    testResults=[];
    dispatchers=[];
      //
  pat_date:Date;
      form=new FormGroup({
        _pat_Id_fk:new FormControl('',Validators.required),
        _sam_Id_fk:new FormControl('',Validators.required),
        _emp_Id_fk:new FormControl('',Validators.required),
        _test_Id_fk:new FormControl('',Validators.required),
        _result_value:new FormControl('',Validators.required),
        _searchTerm:new FormControl('',Validators.required),
        _test_type:new FormControl('',Validators.required),
        _test_name:new FormControl('',Validators.required),
        btnEdit:new FormControl('',Validators.required),
        Patient_date: new FormControl('', Validators.required),
        _discount:new FormControl('',Validators.required),


      });
      get _Pat_Id_fk(){
        return this.form.get('_pat_Id_fk');
      }get _Sam_Id_fk(){
        return this.form.get('_sam_Id_fk');
      }get _Emp_Id_fk(){
        return this.form.get('_emp_Id_fk');
      }get _Test_Id_fk(){
        return this.form.get('_test_Id_fk');
      }get _Result_value(){
        return this.form.get('_result_value');
      }
      get _SearchTerm(){
        return this.form.get('_searchTerm');
      }
       get _Test_type(){
        return this.form.get('_test_type');
      }
       get _Test_name(){
        return this.form.get('_test_name');
      }
      get _btnEdit(){
        return this.form.get('btnEdit');
      }
      //
      //pat_Id_fk:number;
       sam_Id_fk:number;
        emp_Id_fk:number;
      //  test_Id_fk:number;
        Result_value:string;
        test_name;
      id;
      oldResult;
  //  arrays
      listpatients=[]
      listtests=[]
      listsampleTests=[]
      listemployees=[]
      Departments=[]
      listTestDepartments:any[]=[];
      patientobj;
      phoneobj;
      statuspatient=false;
      testdeptStatus=false;
      dep_Id;
      btndisabled=true;
  //
  getPosts(e){
    console.log(e);
    this.patientobj=e;
    this.statuspatient=true;
    console.log( this.patientobj.pat_Id)
    console.log( this.patientobj)
    console.log(this.statuspatient);
    this.search="";
    this._SearchTerm.setValue("sokary");
  }
  test_nameStatus=true;
  changecheckbox(e)
  {
    console.log(e);
    this.form.controls['_test_name'].disable(e);
    // this.form.controls['_test_name'].enable(e);
  // console.log( this.form.controls['_test_name'].disabled);
    // this.test_nameStatus=false;
    // console.log(this.test_nameStatus)
      // this._Test_name.enabled.valueOf=e;
      // this._Test_name.
  }
  allSalary=0;
  discount=0;
  netsalary=0;
  allnetsalary=0;
  date
  // :Date;
  bill1:Bill;
  billId=2;
  billStatus=false;
  //

  safy = this.allSalary - this.discount;
  bill_id:number=1;
 // bill_paid:number
  discount_bill:number
 // net:number
  pat_id:number
  test_id:number
  dis_id;
  bills_id;
  //

  //
  price;



  bill_Id: number;
  bill_paid: number;
  //discount: number;
  net: number;
  pat_Id_fk: number;
  test_Id_fk: number;
  bill_date: Date;
  dis_Id_fk: number;
  ddd;
  getdeptId(e)
  {
    this.allSalary=0;
    this.allnetsalary = 0;
    // delete old items in array
    this.testdeptStatus=false;

    this.listTestDepartments=[];

    // get id
    this.dep_Id=e.target.value;
    if(this.dep_Id!=null || this.dep_Id!=0)
    {
    // get tests
    for(let item of this.listtests)
    {
      console.log("--------")
      console.log(item.Dep_fk)
      console.log(this.dep_Id)
      if(item.Dep_fk == this.dep_Id)
      {
      console.log("==")
        this.listTestDepartments.push(item);
      console.log("pushed")

        console.log(item);
        console.log("success");

      }

    }
    this.billStatus=true;
    // bill
    for(let item of this.listTestDepartments)
    {
        this.allSalary+=item.test_price;
        this.allnetsalary+=item.test_price-this.discount;
        this.date=Date.now().toString();

        console.log(this.billId);
        console.log(this.date);
        console.log(this.netsalary);
      //  this.bill=new Bill(this.billId,this.netsalary,this.date,this.discount,this.netsalary,this.patientobj.pat_Id,item.test_Id)
     // this.bill1 = new  Bill(this.billId,this.netsalary,this.date,this.discount,this.netsalary,this.patientobj.pat_Id,item.test_Id,this.dis_id)
      //  console.log(this.bill);

        //this.BillService.addbill(this.bill1);
    }

    // end bill
        // /
        // for(let item of this.allResults)
        // {
        //   console.log("00000000000000000");

        //   // console.log(item.test_Id_fk)
        //   // console.log(this.patientobj.test_Id_fk)
        //   if(item.pat_Id_fk == this.patientobj.pat_Id )
        //   {
        //   console.log("111111111111111111111111");
        //   //  console.log(item.pat_Id_fk)
        //   // console.log(this.patientobj.pat_Id)
        //   console.log(item)
        //   console.log(this.patientobj)
        //     this.testResults.push(item);
        //     console.log("push");
        //   }
        //   console.log("000000 end 000000");

        //  }
    }
    this.testdeptStatus=true;
    // this.form.controls['btnEdit'].enabled;
    // this.btndisabled=false;
    this.form.controls['btnEdit'].setValue("Add Bill");
    // this.form.valid;
  }

      addbill(){
        console.log("------------------->before bill");
console.log(this.listTestDepartments);
        for(let item of this.listTestDepartments)
        {
          console.log("item")
          console.log(item)
          this.netsalary=item.test_price*this.discount;
          //this.date=(Date.now().toString());
            // this.netsalary=item.test_price*this.discount;
            // this.date=Date.now();
            console.log(this.patientobj.pat_Id+"-========-- "+item.test_Id);
            console.log(this.date);
            console.log("before bill");
          // bill_Id: number;
          // bill_paid: number;
          // discount: number;
          // net: number;
          // pat_Id_fk: number;
          // test_Id_fk: number;
          // bill_date: Date;
          // dis_Id_fk: number;
           this.bill_paid=this.netsalary;
            //this.discount_bill=this.discount;
            this.pat_id= this.patientobj.pat_Id;
            console.log("pat  id")
          console.log(this.patientobj.pat_Id)
            this.test_id=item.test_Id;
            //this.bill1=new Bill (this.bill_id,this.bill_paid,this.discount,this.netsalary,this.pat_id,item.test_Id,this.bill_date,this.dis_id) ;
          this.bill1 = new  Bill(this.billId,this.allSalary,this.discount,this.safy,this.patientobj.pat_Id,item.test_Id,this.pat_date,this.dis_id);
          // this.bill1 = new  Bill(this.billId,this.netsalary,this.date,this.discount,this.netsalary,this.patientobj.pat_Id,item.test_Id,this.dis_id)

           console.log("Bill 1") ;
          console.log(this.bill1);
          console.log("pushed pill");

           this.BillService.addbill(this.bill1);
        }
      }
      //
      getpatientId(e){
        console.log(e.target.value);
          // this.pat_Id_fk=e.target.value;
      }
      //
      getTestId(e){
        this.test_Id_fk=e.target.value;
      }
      getemployeeId(e){
        this.emp_Id_fk=e.target.value;
    }
    //
    getsampleId(e){
      this.sam_Id_fk=e.target.value;
    }

  getdisId(e){
    this.dis_id=e.target.value;
  }
      //
      result:result;
      // editResult(){
      //   for(let item of this.testResults)
      //   {
      //   this.result=new result(item.pat_Id_fk,item.sam_Id_fk,item.emp_Id_fk,item.test_Id_fk,item.Result_value);
      //    this.resultservice.editResult(item.pat_Id_fk,this.result);
      //   //  alert("ok");
      //   }
      // }

  }
