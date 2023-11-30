import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() formData: any;

  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.formData && changes.formData.currentValue) {
      console.log('formData :', this.formData);
    }
  }
  ngOnInit(): void {
  }


}
