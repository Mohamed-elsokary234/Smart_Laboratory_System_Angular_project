import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorProfileComponent } from './Features/Doctor/doctor-profile/doctor-profile.component';
import { AddResultComponent } from './Features/Doctor/add-result/add-result.component';
import { EditResultComponent } from './Features/Doctor/edit-result/edit-result.component';
import { AddDepartmentComponent } from './Features/Admin/add-department/add-department.component';
import { AddDispatureComponent } from './Features/Admin/add-dispature/add-dispature.component';
import { addEmployeeComponent } from './Features/Admin/add-employee/add-employee.component';
import { AddJobComponent } from './Features/Admin/add-job/add-job.component';
import { AddTestComponent } from './Features/Admin/add-test/add-test.component';
import { AdminLayoutComponent } from './Features/Admin/admin-layout/admin-layout.component';
import { BillListComponent } from './Features/Admin/bill-list/bill-list.component';
import { DeleteDepartmentComponent } from './Features/Admin/delete-department/delete-department.component';
import { DeleteDispatcherComponent } from './Features/Admin/delete-dispatcher/delete-dispatcher.component';
import { DeleteEmployeeComponent } from './Features/Admin/delete-employee/delete-employee.component';
import { DeleteJobComponent } from './Features/Admin/delete-job/delete-job.component';
import { DeleteTestComponent } from './Features/Admin/delete-test/delete-test.component';
import {AdminProfileComponent}from './Features/Admin/admin-profile/admin-profile.component';
/*import { AdminProfileComponent } from './Features/Admin/admin-profile/admin-profile.component';*/
import { EditTestComponent } from './Features/Admin/edit-test/edit-test.component';
import {EditJobComponent} from './Features/Admin/edit-job/edit-job.component';
import { EditEmployeeComponent } from './Features/Admin/edit-employee/edit-employee.component';
import { EditDispatcherComponent } from './Features/Admin/edit-dispatcher/edit-dispatcher.component';
import { EditDepartmentComponent } from './Features/Admin/edit-department/edit-department.component';
import { ListTestComponent } from './Features/Admin/list-test/list-test.component';
// import { ListTestComponent } from './Features/_Reports/list-test/list-test.component';
import { ListDepartmentComponent } from './Features/Admin/list-department/list-department.component';
import { ListEmployeeComponent } from './Features/Admin/list-employee/list-employee.component';
import { ListJobComponent } from './Features/Admin/list-job/list-job.component';
import { ListPatientsComponent } from './Features/Admin/list-patients/list-patients.component';
import { AddBillComponent } from './Features/dispatcher/add-bill/add-bill.component';
import { PatientResultComponent } from './Features/Patient/patient-result/patient-result.component';
import { LoginComponent } from './Features/shared/login/login.component';
import { PatientRegisterComponent } from './Features/shared/patient-register/patient-register.component';
import { TestsListComponent } from './Features/shared/tests-list/tests-list.component';
import { HeaderComponent } from './Home/header/header.component';
/*import { HomeComponent } from './Home/home/home.component';*/
import{HomeComponent} from './Home/home/home.component';
import {DoctorLayoutComponent} from './Features/Doctor/doctor-layout/doctor-layout.component';
import {DispatcherLayoutComponent} from './Features/dispatcher/dispatcher-layout/dispatcher-layout.component';
import {DispatcherProfileComponent} from './Features/dispatcher/dispatcher-profile/dispatcher-profile.component';
import { DeletePatientComponent } from './Features/Admin/delete-patient/delete-patient.component';
import { AllBuildReportsComponent } from './_Reports/all-build-reports/all-build-reports.component';
import { PatientPercentAccordingToAgeComponent } from './_Reports/patient-percent-according-to-age/patient-percent-according-to-age.component';
import { PatientPercentAccordingToDateComponent } from './_Reports/patient-percent-according-to-date/patient-percent-according-to-date.component';
import { PatientPercentAccordingToGenderComponent } from './_Reports/patient-percent-according-to-gender/patient-percent-according-to-gender.component';
import { ResultReportComponent } from './_Reports/result-report/result-report.component';
import { SearchBillReportComponent } from './_Reports/search-bill-report/search-bill-report.component';
import { SearchResultReportComponent } from './_Reports/search-result-report/search-result-report.component';
import { TestReportComponent } from './_Reports/test-report/test-report.component';
import { ReportsComponent } from './_Reports/reports/reports.component';
import { PatientReportComponent } from './_Reports/patient-report/patient-report.component';
import { TestsListReportComponent } from './_Reports/tests-list-report/tests-list-report.component';
import { EditPatientComponent } from './Features/Admin/edit-patient/edit-patient.component';
import { NotFoundPageComponent } from './Features/Home/not-found-page/not-found-page.component';
import { TestsLibraryComponent } from './Features/Home/tests-library/tests-library.component';
import { TestResultComponent } from './Features/Home/test-result/test-result.component';
import { ContactUsComponent } from './Features/Home/contact-us/contact-us.component';
import { AboutUsComponent } from './Features/Home/about-us/about-us.component';
import { ServicesComponent } from './Features/Home/services/services.component';
import { TestsDepartmentsComponent } from './Features/Home/tests-departments/tests-departments.component';

import { ListTestDepartmentComponent } from './Features/Admin/list-test-department/list-test-department.component';
import { ListEmployeeJobComponent } from './Features/Admin/list-employee-job/list-employee-job.component';

import { AddPatientComponent } from './Features/Admin/add-patient/add-patient.component';
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {SignInComponent} from "./user/sign-in/sign-in.component";
import {ForbiddenComponent} from "./forbidden/forbidden.component";
import {UserComponent} from "./user/user.component";
import {SignUpComponent} from "./user/sign-up/sign-up.component";
import {AuthGuard} from "./auth/auth.guard";
import {AfterauthComponent} from "./afterauth/afterauth.component";
import {BookComponent} from "./book/book.component";
// import {AddEmployeeComponent} from "../../e2e/src/app/Features/Admin/add-employee/add-employee.component";



const routes: Routes = [
  // admin Routes
  { path: 'admin/ListDepartment/admin/AddDepartment', component: AddDepartmentComponent },
  { path: 'admin/AddDispature', component: AddDispatureComponent },
  // { path: 'admin/AddPatient', component: AddPatientComponent },
  // { path: 'admin/ListEmployee/admin/AddEmployee', component: addEmployeeComponent },
  { path: 'admin/ListJob/admin/AddJob', component: AddJobComponent },
  { path: 'admin/ListTest/admin/AddTest', component: AddTestComponent },
  { path: 'admin/AdminLayout', component: AdminLayoutComponent },
  { path: 'admin/ListDepartment/admin/DeleteDepartment/:id', component: DeleteDepartmentComponent },
  { path: 'admin/DeleteDispatcher/:id', component: DeleteDispatcherComponent },
  { path: 'admin/ListEmployee/:id/admin/DeleteEmployee/:id', component: DeleteEmployeeComponent },
  { path: 'admin/ListJob/admin/DeleteJob/:id', component: DeleteJobComponent },
  { path: 'admin/ListTestDepartment/admin/DeleteTest/:id', component: DeleteTestComponent },
  // { path: 'admin/ListPatients/admin/DeletePatient/:id', component: DeletePatientComponent },

  {path:'admin/profile',component:AdminProfileComponent},
  { path: 'admin/BillList', component: BillListComponent },
  { path: 'admin/ListDepartment/admin/EditDepartment/:id', component: EditDepartmentComponent },
  { path: 'admin/EditDispatcher/:id', component: EditDispatcherComponent },
  // { path: 'admin/ListEmployee/:id/admin/EditEmployee/:id', component: EditEmployeeComponent },
  // { path: 'admin/ListPatients/admin/EditPatient/:id', component: EditPatientComponent },
  { path: 'admin/ListJob/admin/EditJob/:id', component: EditJobComponent },
  { path: 'admin/ListTestDepartment/admin/EditTest/:id', component: EditTestComponent },
  // { path: 'admin/ListTestDepartment/admin/EditTest/:id', component: EditTestComponent },
  // redirect to tests
  {path:'admin/ListTestDepartment/admin/ListTest/:id/admin/EditTest/:id',redirectTo:'admin/ListTestDepartment/admin/EditTest/:id'},
  // {path:'/edittest/:id/listtestdepartment/listtest/:id',redirectTo:'admin/ListTestDepartment/admin/ListTest/:id'},
  // {path:'/listtestdepartment/deletetest/:id/listtestdepartment/listtest/:id',redirectTo:'/listtestdepartment/listtest/:id'},
  {path:'admin/ListTestDepartment/admin/EditTest/:id/admin/ListTestDepartment/admin/ListTest/:id',redirectTo:'admin/ListTestDepartment/admin/ListTest/:id'},
  {path:'admin/ListTestDepartment/admin/ListTest/:id/admin/DeleteTest/:id',redirectTo:'admin/ListTestDepartment/admin/DeleteTest/:id'},
  // redirect to jobs employees
  // {path:'admin/ListEmployeeJob/admin/ListJob/:id',redirectTo:'admin/ListJob/:id'},
  // {path:'admin/ListEmployeeJob/admin/ListEmployee/:id',redirectTo:'admin/ListEmployee/:id'},
  // {path:'admin/ListEmployee/admin/AddEmployee/admin/ListEmployeeJob',redirectTo:'admin/ListEmployeeJob'},
  // {path:'admin/ListEmployee/:id/admin/DeleteEmployee/:id/admin/ListEmployee/:id',redirectTo:'admin/ListEmployee/:id'},
  // {path:'admin/ListEmployee/:id/admin/EditEmployee/:id',redirectTo:'admin/EditEmployee/:id'},

  // admin/ListEmployee/1/admin/DeleteEmployee/1005/admin/ListEmployee/2
  // admin/ListEmployee/2/admin/DeleteEmployee/7
  // /admin/ListEmployee
  // /admin/ListEmployeeJob
  // admin/ListEmployee/2/admin/EditEmployee/1005
//   { path: 'admin/ListDepartment', component: ListDepartmentComponent },
//   // { path: 'admin/ListPatients', component: ListPatientsComponent },
//   { path: 'admin/ListEmployee/:id', component: ListEmployeeComponent },
//   { path: 'admin/ListJob', component: ListJobComponent },
//   { path: 'admin/ListEmployeeJob', component: ListEmployeeJobComponent },
//   { path: 'admin/ListTestDepartment/admin/ListTest/:id', component: ListTestComponent },
//   { path: 'admin/ListTestDepartment', component: ListTestDepartmentComponent },
//
//   // dispatcher
//   { path: 'dispatcher/AddBill', component: AddBillComponent },
//   {path:'dispatcher/layout',component:DispatcherLayoutComponent},
//   {path:'dispatcher/profile',component:DispatcherProfileComponent},
//
//   // doctor
//   { path: 'doctor/DoctorProfile', component: DoctorProfileComponent },
//   { path: 'doctor/AddResult', component: AddResultComponent },
//   { path: 'doctor/EditResult', component: EditResultComponent },
//   { path:'doctor/layout',component:DoctorLayoutComponent},
//
//   // patient
//   { path: 'patient/PatientResult', component: PatientResultComponent },
//   // ------------- --------------//
//   // shared
//   // { path: 'shared/Login', component: LoginComponent},
//   { path: 'shared/PatientRegister', component: PatientRegisterComponent },
//   { path: 'shared/TestsList', component: TestsListComponent },
//   // home
//   /*{ path: 'home/Header', component: HeaderComponent },*/
//   { path: '', component: HomeComponent },
//   { path: 'home', component: HomeComponent },
//   {path:'home/TestsLibrary',component:TestsLibraryComponent},
//   {path:'home/TestResult',component:TestResultComponent},
//   {path:'home/Contactus',component:ContactUsComponent},
//   {path:'home/Aboutus',component:AboutUsComponent},
//   {path:'home/Services',component:ServicesComponent},
//   {path: 'home/TestsLibrary/home/testsDepartment/:id', component: TestsDepartmentsComponent },
//
//
//   {path:'Header',component:HeaderComponent},
//   // ---------- Redirect to -----+++++---------- 1 -----+++++-----
//   // home/TestsLibrary +----
//   {path:'home/TestsLibrary/home/TestResult',redirectTo:'home/TestResult'},
//   {path:'home/TestsLibrary/home/Contactus',redirectTo:'home/Contactus'},
//   {path:'home/TestsLibrary/home/Aboutus',redirectTo:'home/Aboutus'},
//   {path:'home/TestsLibrary/home/Services',redirectTo:'home/Services'},
//   {path:'home/TestsLibrary/shared/PatientRegister',redirectTo:'shared/PatientRegister'},
//   // {path:'home/TestsLibrary/shared/Login',redirectTo:'shared/Login'},
// // 2 home/TestResult + ---
// {path:'home/TestResult/home/TestsLibrary',redirectTo:'home/TestsLibrary'},
// {path:'home/TestResult/home/Contactus',redirectTo:'home/Contactus'},
// {path:'home/TestResult/home/Aboutus',redirectTo:'home/Aboutus'},
// {path:'home/TestResult/home/Services',redirectTo:'home/Services'},
// {path:'home/TestResult/shared/PatientRegister',redirectTo:'shared/PatientRegister'},
// // {path:'home/TestResult/shared/Login',redirectTo:'shared/Login'},
//
// // 3 home/Contactus + -----
// {path:'home/Contactus/home/TestsLibrary',redirectTo:'home/TestsLibrary'},
// {path:'home/Contactus/home/TestResult',redirectTo:'home/TestResult'},
// {path:'home/Contactus/home/Aboutus',redirectTo:'home/Aboutus'},
// {path:'home/Contactus/home/Services',redirectTo:'home/Services'},
// {path:'home/Contactus/shared/PatientRegister',redirectTo:'shared/PatientRegister'},
// // {path:'home/Contactus/shared/Login',redirectTo:'shared/Login'},
//
// //---------------
// // 4 home/Services
// {path:'home/Services/home/TestsLibrary',redirectTo:'home/TestsLibrary'},
// {path:'home/Services/home/TestResult',redirectTo:'home/TestResult'},
// {path:'home/Services/home/Aboutus',redirectTo:'home/Aboutus'},
// {path:'home/Services/home/Contactus',redirectTo:'home/Contactus'},
// {path:'home/Services/shared/PatientRegister',redirectTo:'shared/PatientRegister'},
// // {path:'home/Services/shared/Login',redirectTo:'shared/Login'},
//
// //// 5 home/Aboutus
// {path:'home/Aboutus/home/TestsLibrary',redirectTo:'home/TestsLibrary'},
// {path:'home/Aboutus/home/TestResult',redirectTo:'home/TestResult'},
// {path:'home/Aboutus/home/Contactus',redirectTo:'home/Contactus'},
// {path:'home/Aboutus/home/Services',redirectTo:'home/Services'},
// {path:'home/Aboutus/shared/PatientRegister',redirectTo:'shared/PatientRegister'},
// // {path:'home/Aboutus/shared/Login',redirectTo:'shared/Login'},
//
// ////  6 end
// // {path:'home/Contactus/home/TestsLibrary',redirectTo:'home/TestsLibrary'},
// // {path:'home/Contactus/home/TestResult',redirectTo:'home/TestResult'},
// // {path:'home/Contactus/home/Aboutus',redirectTo:'home/Aboutus'},
// // {path:'home/Contactus/home/Services',redirectTo:'home/Services'},
// // {path:'home/Contactus/shared/PatientRegister',redirectTo:'shared/PatientRegister'},
// // {path:'home/Contactus/shared/Login',redirectTo:'shared/Login'},
//
// //
//
//   //Reports
//   {path:'reports/Reports',component:ReportsComponent},
// // 10 routes
//   {path:'reports/Reports/reports/AllBuildReports',component:AllBuildReportsComponent},
//   {path:'reports/Reports/reports/PatientPercentAccordingToAge',component:PatientPercentAccordingToAgeComponent},
//   {path:'reports/Reports/reports/PatientPercentAccordingToDate',component:PatientPercentAccordingToDateComponent},
//   {path:'reports/Reports/reports/PatientPercentAccordingToGender',component:PatientPercentAccordingToGenderComponent},
//   {path:'reports/Reports/reports/ResultReport',component:ResultReportComponent},
//   {path:'reports/Reports/reports/SearchBillReport',component:SearchBillReportComponent},
//   {path:'reports/Reports/reports/SearchResultReport',component:SearchResultReportComponent},
//   {path:'reports/Reports/reports/TestsListReport',component:TestsListReportComponent},
//   {path:'reports/Reports/reports/TestReport',component:TestReportComponent},
//   {path:'reports/Reports/reports/PatientReport',component:PatientReportComponent},
// // not found component
//   {path:'**',component:NotFoundPageComponent},

  //////////////////////////////auth///////////////////////////
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'Afterauth', component: AfterauthComponent, canActivate: [AuthGuard]},
  {path: 'forbidden', component: ForbiddenComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: AdminPanelComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Doctor' ,'Dispatcher','Patient']}},


  {path: 'listtestdepartment', component:ListTestDepartmentComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Doctor']}},
  {path: 'listdepartment', component: ListDepartmentComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Doctor']}},
  {path: 'editdepartment/:id', component: EditDepartmentComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Doctor']}},
  {path: 'adddepartment', component: AddDepartmentComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Doctor']}},
  {path: 'deletedepartment/:id', component: DeleteDepartmentComponent, canActivate: [AuthGuard], data: {roles: ['Admin']}},

  {path: 'listpatients', component: ListPatientsComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Doctor','Dispatcher']}},
  {path: 'editpatients/:id', component: EditPatientComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Dispatcher']}},
  {path: 'addpatients', component: AddPatientComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Dispatcher']}},
  {path: 'deletepatients/:id', component: DeletePatientComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Dispatcher']}},

  {path: 'listbill', component: BillListComponent, canActivate: [AuthGuard], data: {roles: ['Admin']}},

  {path: 'listemployee', component: ListEmployeeComponent, canActivate: [AuthGuard], data: {roles: ['Admin']}},
  {path: 'editemployee/:id', component: EditEmployeeComponent, canActivate: [AuthGuard], data: {roles: ['Admin']}},
  {path: 'addemployee', component: addEmployeeComponent, canActivate: [AuthGuard], data: {roles: ['Admin']}},
  {path: 'deleteemployee/:id', component: DeleteEmployeeComponent, canActivate: [AuthGuard], data: {roles: ['Admin']}},

  {path: 'listtest', component: ListTestComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Doctor']}},
  {path: 'listtest/:id', component: ListTestComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Doctor']}},
  {path: 'edittest/:id', component: EditTestComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Doctor']}},
  {path: 'addtest', component: AddTestComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Doctor']}},
  {path: 'deletetest/:id', component: DeleteTestComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Doctor']}},
  {path: 'listtestdepartment', component: ListTestDepartmentComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Doctor']}},

  {path: 'reports', component: ReportsComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Doctor']}},

  {path: 'allbillreports', component: AllBuildReportsComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Doctor']}},
  {path: 'patientreport', component: PatientReportComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Doctor']}},
  {path: 'resultreport', component: ResultReportComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Doctor']}},
  {path: 'testslistreport', component: TestsListReportComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Doctor']}},
  {path: 'testreport', component: TestReportComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Doctor']}},
  {path: 'searchbillreport', component: SearchBillReportComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Doctor','Dispatcher']}},
  {path: 'searchresultreport', component: SearchResultReportComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Doctor','Patient','AllowAnonymous']}},
  {path: 'patientpercentaccordingtoage', component: PatientPercentAccordingToAgeComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Doctor']}},
  {path: 'patientpercentaccordingtodate', component: PatientPercentAccordingToDateComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Doctor']}},
  {path: 'patientpercentaccordingtogender', component: PatientPercentAccordingToGenderComponent, canActivate: [AuthGuard], data: {roles: ['Admin','Doctor']}},

  {path: 'result', component: AddResultComponent, canActivate: [AuthGuard], data: {roles: ['Doctor']}},
  {path: 'addresult', component: AddResultComponent, canActivate: [AuthGuard], data: {roles: ['Doctor']}},
  {path: 'editresult', component: EditResultComponent, canActivate: [AuthGuard], data: {roles: ['Doctor']}},
  {path: 'editresult/:id', component: EditResultComponent, canActivate: [AuthGuard], data: {roles: ['Doctor']}},

  {path: 'book', component: BookComponent, canActivate: [AuthGuard], data: {roles: ['Doctor']}},


  {path: 'DoctorProfile', component: DoctorProfileComponent, canActivate: [AuthGuard], data: {roles: ['Doctor']}},
  {path: 'DispatcherProfile', component: DispatcherProfileComponent, canActivate: [AuthGuard], data: {roles: ['Dispatcher']}},

  {path: 'addbill', component: AddBillComponent, canActivate: [AuthGuard], data: {roles: ['Dispatcher']}},
  // {path: 'addbill/:id', component: AddBillComponent, canActivate: [AuthGuard], data: {roles: ['Dispatcher']}},
  // {path: 'bills/:id', component: AddBillComponent, canActivate: [AuthGuard], data: {roles: ['Dispatcher']}},



  {
    path: 'signup', component: UserComponent,
    children: [{path: '', component: SignUpComponent}]
  },
  {
    path: 'login', component: UserComponent,
    children: [{path: '', component: SignInComponent}]
  },
  // {
  //   path: 'listtest', component: ListTestComponent,
  //   children: [{path: 'deletetest/:id', component: DeleteTestComponent}]
  // }
  // ,
  // {path: '', redirectTo: '/home', pathMatch: 'full'}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
