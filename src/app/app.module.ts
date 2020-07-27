import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//components
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
//directives
import { TextonlyDirective } from './directives/textonly.directive';
import { CapitalizeDirective } from './directives/capitalize.directive';
//services
import { DepartmentService } from './services/department.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    CreateUserComponent,
    TextonlyDirective,
    CapitalizeDirective,
    AuthComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DepartmentService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
