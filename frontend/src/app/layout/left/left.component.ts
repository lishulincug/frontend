import { Component, OnInit, OnDestroy } from '@angular/core';
import {SettingsService} from "../../core/settings/settings.service";
import {PrivillegeService} from "../../core/privillege.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit, OnDestroy {

  constructor(public settings: SettingsService,
              public privillegeService:PrivillegeService,
              public router:Router,
  ) { }
  user = {};
  isCollapsed = false;

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {

  }
  goToUrl(url){
    this.router.navigate([url]);
  }
  ngOnDestroy(): void {
  }

    checkIsShow(s: string) {
        return this.privillegeService.checkPrivillege(s);
    }
}
