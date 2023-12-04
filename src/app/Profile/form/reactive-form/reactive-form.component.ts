import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Profile } from 'src/app/Profile/core/Interface/profile';
import { ProfileService } from '../../core/service/profile.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  @Output() formSubmitted = new EventEmitter<Profile>();
  constructor(
    private profileService: ProfileService
  ) { }
  ngOnInit(): void {
    this.profileService.buttonObservable.subscribe((e) => {
      console.log('GET api', e);
    });
  }
  validateForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    date: new FormControl('', Validators.required),
  });

  onSubmitForm() {
    if (this.validateForm.valid) {
      const formData = this.validateForm.value;
      this.formSubmitted.emit(formData);
      this.profileService
        .create(this.validateForm.getRawValue())
        .subscribe((e) => { });
    }
    // console.log(this.validateForm);

  }
}
