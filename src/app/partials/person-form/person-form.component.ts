import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Person } from '../../person.model';
import { PersonsApiService } from '../../persons-api.service';
import * as $ from 'jquery/dist/jquery.min.js';

@Component({
  selector: 'app-person-form',
  providers: [ PersonsApiService ],
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  @Input() edit: boolean;
  person: Person = new Person();

  constructor(private router: Router, private route: ActivatedRoute, private personsApi: PersonsApiService) { }

  ngOnInit() {
    if (this.edit) {
      //load person
      this.route.paramMap.switchMap((params: ParamMap) => {
        return this.personsApi.GetSingle(parseInt(params.get('id')));
      })
      .subscribe((person: Person) => { console.log('person: ', person); return this.person = person });
    }
  }
  
  processForm() {
    if (!this.person.name) {
      $('[name="name"]').attr('placeholder', 'Start typing first name here').focus();
      return alert('Fill in first name!');
    }
    if (!this.person.surname) {
      $('[name="surname"]').attr('placeholder', 'Start typing last name here').focus();
      return alert('Fill in last name!');
    }
    if (!this.person.age) {
      $('[name="age"]').attr('placeholder', 'Start typing age here').focus();
      return alert('Fill in age!');
    }
    console.log('processForm person: ', this.person);
    if (this.edit) {
      this.personsApi.Update(this.person.id, this.person)
        .subscribe((response: Person) => {
          console.log('edited: ', response);
          this.router.navigate(['/persons/' + this.person.id]);
        }, (error: any) => {
          console.log('An error occured ' , error);
        });
    } else {
      this.personsApi.Add(this.person)
        .subscribe((person: Person) => {
          console.log('added', person);
          this.router.navigate(['/persons']);
      });
    }
  }

}
