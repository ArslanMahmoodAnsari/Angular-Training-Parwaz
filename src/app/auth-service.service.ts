import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class AuthServiceService {
	authenticated: boolean = false;
	constructor() {}

	isAuthenticated(): boolean {
		return this.authenticated;
	}

	login() {
		this.authenticated = true;
	}

	logout() {
		this.authenticated = false;
	}
}
