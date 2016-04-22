import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class AuthService {
    
    constructor(public http : Http) {
        
    }
    
    public authenticate(username : string, password : string) : void {
        console.log(`[AUTH_SERVICE] authenticate ${username}`);
        let baseUrl = 'http://localhost:8080';
        this.http.get(`${baseUrl}/api/version`)
        .subscribe(response => {
            console.log(response.status);
        });
    }
    
}