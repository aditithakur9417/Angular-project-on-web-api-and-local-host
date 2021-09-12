import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HTTP_INTERCEPTORS }    from '@angular/common/http';
import { JwtInterceptor } from './helper/jwt.interceptor';
import { ErrorInterceptor } from './helper/error.interceptor';
import { fakeBackendProvider } from './helper/fake-backend';




//Importing angula materials modules 
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatTooltipModule, MatMenuModule, MatCardModule, MatFormFieldModule, MatListModule, MatDialogModule, MatInputModule, MatCheckboxModule }from '@angular/material';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { HomeComponent } from './home/home.component';

import { AuthenticationService} from './services/authentication.service';
import { UserService} from './services/user.service';
import { AuthGuard } from './authgaurd/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EnquiryComponent,
    HomeComponent,
   
  ],
  imports: [
    CommonModule,
    BrowserModule,AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,MatCardModule,MatFormFieldModule,MatInputModule,
    OverlayModule,A11yModule,MatListModule,MatDialogModule,
    FormsModule,ReactiveFormsModule,
    MatCheckboxModule,
    HttpClientModule,
   
  
    
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }
