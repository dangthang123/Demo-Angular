import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './form/detail/detail.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { PhoneNumberFormatPipe } from './core/pipe/phone-format.pipe';
import { DateFormatPipe } from './core/pipe/date-format.pipe';
import { ProfileService } from './core/service/profile.service';
import { TableComponent } from './form/table/table.component';

@NgModule({
    declarations: [
        DetailComponent,
        ReactiveFormComponent,
        FormComponent,
        PhoneNumberFormatPipe,
        DateFormatPipe,
        TableComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProfileRoutingModule,
    ],
    providers: [ProfileService],
})
export class ProfileModule { }
