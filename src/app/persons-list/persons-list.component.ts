import { Component, OnInit } from '@angular/core';
import { PersonsApiService } from '../persons-api.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-persons-list',
  providers: [PersonsApiService],
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {
  persons: Person[] = [];
  loading: boolean = true;
  
  constructor(private _dataService: PersonsApiService) { }

  ngOnInit() {
    this.getAllPersons();
  }
  
  private getAllPersons(): void {
    this._dataService
      .GetAll()
      .subscribe((data: Person[]) => { this.loading = false; return this.persons = data },
        error => console.log(error),
        () => console.log('Get all Items complete', this.persons)
      );
  }
}
