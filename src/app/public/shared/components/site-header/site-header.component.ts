import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements AfterViewChecked {

  @ViewChild('sidenav')
  public sidenav?: MatSidenav;

  public isSideNavOpened: boolean = false;

  constructor() { }
  ngAfterViewChecked(): void {
    this.isSideNavOpened = this.sidenav?.opened!;
  }



  public openSideNav= ():void => {
    this.sidenav?.toggle();
    console.log(this.sidenav?.opened);
  }

}
