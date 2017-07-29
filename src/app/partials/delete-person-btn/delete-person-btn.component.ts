import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { PersonsApiService } from '../../persons-api.service';
import { Person } from '../../person.model';

@Component({
  selector: 'app-delete-person-btn',
  providers: [ PersonsApiService ],
  templateUrl: './delete-person-btn.component.html',
  styleUrls: ['./delete-person-btn.component.css']
})
export class DeletePersonBtnComponent implements OnInit {
  @Input() id: number;

  constructor(private router: Router, private personsApi: PersonsApiService) { }

  ngOnInit() {
    console.log('this.id: ', this.id);
  }
  
  deletePerson() {
    if (confirm('Are you sure you want to delete this person?')) {
      console.log('calling delete');
      this.personsApi.Delete(this.id)
        .subscribe((res: Response) => {
          console.log('deleted: ', res);
          this.router.navigate(['/persons']);
        });
    }
  }

}
