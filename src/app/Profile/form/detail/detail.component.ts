import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProfileService } from '../../core/service/profile.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() formData: any;

  constructor(private profileService: ProfileService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.formData && changes.formData.currentValue) {
      console.log('formData :', this.formData);
    }
  }
  ngOnInit(): void {
  }
  changeValue() {
    this.profileService.buttonSubject.next(Math.random());
  }

}
