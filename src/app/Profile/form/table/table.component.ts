import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../core/service/profile.service';
import { Profile } from '../../core/Interface/profile';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private profileService: ProfileService) { }
  tables: Profile[] = [];

  ngOnInit(): void {
    this.profileService.getAll().subscribe((e) => {
      this.tables = e;
    });

  }
}
