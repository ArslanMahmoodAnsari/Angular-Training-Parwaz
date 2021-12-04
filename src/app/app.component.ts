import { Component } from '@angular/core';
import { AuthServiceService } from './auth-service.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'directivesPractice';

	constructor(private authServiceService: AuthServiceService) {}

	login() {
		this.authServiceService.login();
	}

	logout() {
		this.authServiceService.logout();
	}
}
