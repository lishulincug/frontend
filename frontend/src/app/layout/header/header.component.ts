
import { Component, OnInit} from '@angular/core';
import {LoginService} from "../../routes/login/login.service";
import {PrivillegeService} from "../../core/privillege.service";
import {UserService} from "../../routes/login/user.service";
import {User} from "../../domain/user.domain";


declare var $: any;

@Component({
	selector: 'app-header',
	templateUrl: "./header.component.html",
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public user: User = new User();
	constructor(private loginservice: LoginService, private userService: UserService,public privillegeService: PrivillegeService) {
	}
	ngOnInit() {
	    this.user = this.userService.user;
	}
    logout() {
        this.loginservice.logout();
    }
}
