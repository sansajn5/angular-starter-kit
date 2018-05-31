import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(
        private router: Router
    ) {}

    onChatRoom() {
        this.router.navigateByUrl('/dashboard/chat-room');
    }

    onHome() {
        this.router.navigateByUrl('/dashboard');
    }

    onLogin() {
        this.router.navigateByUrl('/auth/sign-in');
    }

    onLogout() {
        localStorage.clear();
        this.router.navigateByUrl('/auth/sign-in');
    }
}