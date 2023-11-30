import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DateFormatPipe } from './Pipe/date-format.pipe';
import { PhoneNumberFormatPipe } from './Pipe/phone-format.pipe';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { DetailComponent } from './Components/detail/detail.component';
import { TestComponent } from './Components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    DateFormatPipe,
    PhoneNumberFormatPipe,
    ReactiveFormComponent,
    DetailComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
