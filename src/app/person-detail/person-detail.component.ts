import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { PersonsApiService } from '../persons-api.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-person-detail',
  providers: [PersonsApiService],
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  person: Person;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router,private _dataService: PersonsApiService) {
    this.person = new Person();
  }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => {
      return this._dataService.GetSingle(parseInt(params.get('id')));
    })
    .subscribe((person: Person) => { this.loading = false; return this.person = person });
  }
}
