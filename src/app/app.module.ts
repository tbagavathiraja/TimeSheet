import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, FormControl} from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { StartdayComponent } from './startday/startday.component';
import { LeavetaskComponent } from './login/leavetask/leavetask.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    LoginComponent,
    UserComponent,
    StartdayComponent,
    LeavetaskComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
