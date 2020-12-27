import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { EmployeeserviceService } from './auth/employeeservice.service';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { BlogpostModule } from '../../src/app/blogpost/blogpost.module';
import { CmspageModule } from '../app/cmspage/cmspage.module';
import { AuthModule } from '../app/auth/auth.module';
import { AdminModule } from '../app/admin/admin.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    BlogpostModule,
    CmspageModule,
    AuthRoutingModule,
    AuthModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [Title, EmployeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
