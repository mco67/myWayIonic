import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';

@Injectable()
export class AdminService {
    
    constructor(private http:Http) {} 
    
    getUsers() {
        let baseUrl = 'http://localhost:8080';
        this.http.get(`${baseUrl}/api/version`)
        .subscribe(response => {
            console.log(response.status);
        });  
    }
} 