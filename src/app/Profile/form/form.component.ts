import { Component } from '@angular/core';
import { Profile } from 'src/app/Profile/core/Interface/profile';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent {
    formDataForAboutPage: Profile | undefined;
    constructor() { }
    handleFormSubmitted(formData: Profile) {
        this.formDataForAboutPage = formData;
    }
}
