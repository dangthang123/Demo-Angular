import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Profile } from 'src/app/Profile/core/Interface/profile';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnChanges {
  @Input() formData: Profile | undefined;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.formData && changes.formData.currentValue) {
      console.log('formData :', this.formData);
    }
  }
}
