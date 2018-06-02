import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
//import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { LoaderService } from '../Services/SpinnerServices';

@Injectable()
export class UserService {
    constructor(private _http: Http, private loaderService: LoaderService) {

    }
    PostData(url: string, model: any): Observable<any> {   
        this.loaderService.display(true);
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-type': 'application/json' });
        //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, options)
            .map((response: Response) => <any>response.json())                        
            .catch(this.handleError)

    }       
    GetData(url: string): Observable<any> { 
        this.loaderService.display(true);
        return this._http.get(url)       
            .map((response: Response) => <any>response.json(), this.loaderService.display(false))       
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
        

    }

    GetDataByID(url: string, id: Number): Observable<any> {
        return this._http.get(url + id).map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    public restfulPost(body: Object, requestUrl: string, options: RequestOptions): Observable<any> {
        alert('call');
        let url = requestUrl;
        let header = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        let defaultOptions = options === null ? new RequestOptions({ headers: header }) : options;
        return this._http.post(url, JSON.parse(JSON.stringify(body)), defaultOptions)
            .map((res: Response) => res.json())
            .catch((error) => Observable.throw(error));
    }
}
