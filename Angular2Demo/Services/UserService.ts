import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
//import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {
    constructor(private _http: Http) {

    }
    PostData(url: string, model: any): Observable<any> {        
        let body = JSON.stringify(model);
        console.log(body)
        debugger;
        let headers = new Headers({ 'Content-type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, options)
            .map((response: Response) => <any>response.json())
                .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    public restfulPost(body: Object, requestUrl: string, options: RequestOptions): Observable<any> {
        alert('call');
        let url = requestUrl;
        let header = new Headers({ 'Content-Type': 'application/json' });
        let defaultOptions = options === null ? new RequestOptions({ headers: header }) : options;
        return this._http.post(url, JSON.parse(JSON.stringify(body)), defaultOptions)
            .map((res: Response) => res.json())
            .catch((error) => Observable.throw(error));
    }
}
