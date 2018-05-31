import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    saveToken(token: string) {
        localStorage.setItem('token', token)
    }

    saveUser(token: string, user: any) {
        const loggedUser = JSON.stringify(user);

        localStorage.setItem('token', token);
        localStorage.setItem('user', loggedUser);
        localStorage.setItem('role', user.role);
    }

    saveToStorage(name: string, value: string) {
        localStorage.setItem(name,value);
    }

    deleteFromStorage(name: string) {
        localStorage.removeItem(name);
    }

    existInStorage(name: string) {
        return (localStorage.getItem(name)) ? true : false;
    }

    getToken() {
        return localStorage.getItem('token');
    }

}