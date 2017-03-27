import { Injectable } from '@angular/core';
import { ICoche } from './coche';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class CochesService {

    private _cochesURL = "app/coches.json";

    constructor(private _http: Http){

    }

    getCoches(): Observable<ICoche[]> {
      return this._http.get(this._cochesURL).
      map((response: Response) => <ICoche[]>response.json());
    }

}
