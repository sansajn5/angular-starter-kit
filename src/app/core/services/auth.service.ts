import { LoginModel } from './../models/login.model';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

    constructor(
        private apiService: ApiService
    ) {}

    loginUser(login: LoginModel): Observable<any> {
        return this.apiService.post('login', login)
    }

} 