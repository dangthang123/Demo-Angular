import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  formDataForAboutPage: any;
  // items = ['i1', 'i2', 'i3'];

  constructor() { }
  validateForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    date: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
  }
  ngOnChanges() {

  }
  onSubmitForm() {
    if (this.validateForm.valid) {
      this.formDataForAboutPage = this.validateForm.value;
    }
  }
  // addItem(newItem: string) {
  //   this.items.push(newItem);
  // }

}
