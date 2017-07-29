import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Person } from './person.model';

@Injectable()
export class PersonsApiService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http) {

        this.actionUrl = 'http://nameless-waterfall-9048.getsandbox.com/users';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAll = (): Observable<Person[]> => {
        return this._http.get(this.actionUrl)
            .map((response: Response) => { console.log('/users response: ', response.json()); return <Person[]>response.json() })
    }

    public GetSingle = (id: number): Observable<Person> => {
        return this._http.get(this.actionUrl + '/' + id)
            .map((response: Response) => { console.log('/users/' + id, response.json()); return <Person>response.json() });
    }

    public Add = (person: Person): Observable<Person> => {
        let toAdd = JSON.stringify(person);

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <Person>response.json());
    }

    public Update = (id: number, itemToUpdate: Person): Observable<Person> => {
        return this._http.put(this.actionUrl + '/' + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map((response: Response) => response.json());
    }

    public Delete = (id: number): Observable<Response> => {
        console.log('Calling Delete ', id);
        return this._http.delete(this.actionUrl + '/' + id)
            .map((response: Response) => response.json());
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}