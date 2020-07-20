import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TelerikReportingModule} from '@progress/telerik-angular-report-viewer';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
//
import { NgImageSliderModule } from 'ng-image-slider';
// RECOMMENDED
import { CarouselModule } from 'ngx-bootstrap/carousel';
// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)
// import { CarouselModule } from 'ngx-bootstrap';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
//
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// RECOMMENDED
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// ------------->>



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {HttpClientModule} from '@angular/common/http';


import {AppRoutingModule} from './app-routing.module';
import {AddDepartmentComponent} from './Features/Admin/add-department/add-department.component';
import {AddDispatureComponent} from './Features/Admin/add-dispature/add-dispature.component';
import {addEmployeeComponent} from './Features/Admin/add-employee/add-employee.component';
import {AddJobComponent} from './Features/Admin/add-job/add-job.component';
import {AddTestComponent} from './Features/Admin/add-test/add-test.component';
import {BillListComponent} from './Features/Admin/bill-list/bill-list.component';
import {DeleteDepartmentComponent} from './Features/Admin/delete-department/delete-department.component';
import {DeleteEmployeeComponent} from './Features/Admin/delete-employee/delete-employee.component';
import {DeleteDispatcherComponent} from './Features/Admin/delete-dispatcher/delete-dispatcher.component';
import {ListEmployeeComponent} from './Features/Admin/list-employee/list-employee.component';
import {EditEmployeeComponent} from './Features/Admin/edit-employee/edit-employee.component';
import {EditDispatcherComponent} from './Features/Admin/edit-dispatcher/edit-dispatcher.component';
import {EditDepartmentComponent} from './Features/Admin/edit-department/edit-department.component';
import {EditJobComponent} from './Features/Admin/edit-job/edit-job.component';
import {EditTestComponent} from './Features/Admin/edit-test/edit-test.component';
import {ListTestComponent} from './Features/Admin/list-test/list-test.component';
import {ListPatientsComponent} from './Features/Admin/list-patients/list-patients.component';
import {DminProfileComponent} from './Features/Admin/dmin-profile/dmin-profile.component';
import {AdminLayoutComponent} from './Features/Admin/admin-layout/admin-layout.component';
import {DoctorProfileComponent} from './Features/Doctor/doctor-profile/doctor-profile.component';
import {DeleteJobComponent} from './Features/Admin/delete-job/delete-job.component';
import {DeleteTestComponent} from './Features/Admin/delete-test/delete-test.component';
import {ListDepartmentComponent} from './Features/Admin/list-department/list-department.component';
import {ListJobComponent} from './Features/Admin/list-job/list-job.component';
import {AddResultComponent} from './Features/Doctor/add-result/add-result.component';
import {EditResultComponent} from './Features/Doctor/edit-result/edit-result.component';
import {PatientResultComponent} from './Features/Patient/patient-result/patient-result.component';
import {AddBillComponent} from './Features/dispatcher/add-bill/add-bill.component';
import {LoginComponent} from './Features/shared/login/login.component';
import {PatientRegisterComponent} from './Features/shared/patient-register/patient-register.component';
import {TestsListComponent} from './Features/shared/tests-list/tests-list.component';
import {HeaderComponent} from './Home/header/header.component';
import {DoctorLayoutComponent} from './Features/Doctor/doctor-layout/doctor-layout.component';
import {DispatcherLayoutComponent} from './Features/dispatcher/dispatcher-layout/dispatcher-layout.component';
import {DispatcherProfileComponent} from './Features/dispatcher/dispatcher-profile/dispatcher-profile.component';
import {DeletePatientComponent} from './Features/Admin/delete-patient/delete-patient.component';
import {AdminProfileComponent} from './Features/Admin/admin-profile/admin-profile.component';
import {ReportsComponent} from './_Reports/reports/reports.component';
import {AllBuildReportsComponent} from './_Reports/all-build-reports/all-build-reports.component';
import {PatientReportComponent} from './_Reports/patient-report/patient-report.component';
// tslint:disable-next-line:max-line-length
import {PatientPercentAccordingToAgeComponent} from './_Reports/patient-percent-according-to-age/patient-percent-according-to-age.component';
import {PatientPercentAccordingToDateComponent} from './_Reports/patient-percent-according-to-date/patient-percent-according-to-date.component';
import {PatientPercentAccordingToGenderComponent} from './_Reports/patient-percent-according-to-gender/patient-percent-according-to-gender.component';
import {ResultReportComponent} from './_Reports/result-report/result-report.component';
import {SearchBillReportComponent} from './_Reports/search-bill-report/search-bill-report.component';
import {SearchResultReportComponent} from './_Reports/search-result-report/search-result-report.component';
import {TestReportComponent} from './_Reports/test-report/test-report.component';
import {TestsListReportComponent} from './_Reports/tests-list-report/tests-list-report.component';
import { BookComponent } from './book/book.component';
import{HomeComponent} from './Home/home/home.component';
import { NewsComponent } from './News/news/news.component';
//import { FooterComponent } from './Home/footer/footer.component';
import { SliderComponent } from './Home/slider/slider.component';
// ----------------------------------------------//
import { EditPatientComponent } from './Features/Admin/edit-patient/edit-patient.component';
import { EditBillComponent } from './Features/Admin/edit-bill/edit-bill.component';
import { DeleteBillComponent } from './Features/Admin/delete-bill/delete-bill.component';
import { FooterComponent } from './Home/footer/footer.component';
// import { SliderComponent } from './Home/slider/slider.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesComponent } from './Features/Home/services/services.component';
import { TestsLibraryComponent } from './Features/Home/tests-library/tests-library.component';
import { TestResultComponent } from './Features/Home/test-result/test-result.component';
import { ContactUsComponent } from './Features/Home/contact-us/contact-us.component';
import { AboutUsComponent } from './Features/Home/about-us/about-us.component';
import { NotFoundPageComponent } from './Features/Home/not-found-page/not-found-page.component';
import { HeaderDispatcherComponent } from './Features/dispatcher/header-dispatcher/header-dispatcher.component';
import { PatientHeaderComponent } from './Features/Patient/patient-header/patient-header.component';
import { DoctorHeaderComponent } from './Features/Doctor/doctor-header/doctor-header.component';
import { TestsDepartmentsComponent } from './Features/Home/tests-departments/tests-departments.component';
import { ListTestDepartmentComponent } from './Features/Admin/list-test-department/list-test-department.component';
import { ListEmployeeJobComponent } from './Features/Admin/list-employee-job/list-employee-job.component';
import { AddPatientComponent } from './Features/Admin/add-patient/add-patient.component';


//auth imports

import {RouterModule, Routes} from '@angular/router';


import {UserService} from './shared/user.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {UserComponent} from './user/user.component';
import {SignInComponent} from './user/sign-in/sign-in.component';
//import {HomeComponent} from './home/home.component';
import {SignUpComponent} from './user/sign-up/sign-up.component';
import {AuthGuard} from './auth/auth.guard';
import {AuthInterceptor} from './auth/auth.interceptor';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {AfterauthComponent} from "./afterauth/afterauth.component";




@NgModule({
  declarations: [
    AppComponent,
    AddDepartmentComponent,
    AddDispatureComponent,
    addEmployeeComponent,
    AddJobComponent,
    AddTestComponent,
    DminProfileComponent,
    BillListComponent,
    DeleteDepartmentComponent,
    DeleteEmployeeComponent,
    DeleteDispatcherComponent,
    ListEmployeeComponent,
    EditEmployeeComponent,
    EditDispatcherComponent,
    EditDepartmentComponent,
    EditJobComponent,
    EditTestComponent,
    ListTestComponent,
    ListPatientsComponent,
    AdminLayoutComponent,
    DminProfileComponent,
    DoctorProfileComponent,
    DeleteJobComponent,
    DeleteTestComponent,
    ListDepartmentComponent,
    ListJobComponent,
    AddResultComponent,
    EditResultComponent,
    PatientResultComponent,
    AddBillComponent,
    LoginComponent,
    PatientRegisterComponent,
    TestsListComponent,
    HeaderComponent,
    DoctorLayoutComponent,
    DispatcherLayoutComponent,
    DispatcherProfileComponent,
    DeletePatientComponent,
    AdminProfileComponent,
    ReportsComponent,
    AllBuildReportsComponent,
    PatientReportComponent,
    PatientPercentAccordingToAgeComponent,
    PatientPercentAccordingToDateComponent,
    PatientPercentAccordingToGenderComponent,
    ResultReportComponent,
    SearchBillReportComponent,
    SearchResultReportComponent,
    TestReportComponent,
    TestsListReportComponent,
    BookComponent,
    HomeComponent,
    NewsComponent,
    FooterComponent,
    SliderComponent,
    // ------------------------


    EditPatientComponent,
    EditBillComponent,
    DeleteBillComponent,
    // FooterComponent,
    // SliderComponent,
    ServicesComponent,
    TestsLibraryComponent,
    TestResultComponent,
    ContactUsComponent,
    AboutUsComponent,
    NotFoundPageComponent,
    HeaderDispatcherComponent,
    PatientHeaderComponent,
    DoctorHeaderComponent,
    TestsDepartmentsComponent,
    ListTestDepartmentComponent,
    ListEmployeeJobComponent,
    AddPatientComponent,
    //

    SignUpComponent,
    UserComponent,
    SignInComponent,
    HomeComponent,
    AdminPanelComponent,
    ForbiddenComponent,
    AfterauthComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    HttpClientModule,
    TelerikReportingModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    //
    NgImageSliderModule,
    CarouselModule.forRoot(),
    Ng2PageScrollModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
    providers: [UserService, AuthGuard,
      ,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      }],
  bootstrap: [AppComponent]
})
export class AppModule { }
