import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class UserService {
    
    constructor(public http : Http) {
           
    }
}