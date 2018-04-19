import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  showMobileNav: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleNav(): void {
    const navItems = <HTMLElement>document.querySelector('.nav-items');
    this.showMobileNav = !this.showMobileNav;
    navItems.style.display = this.showMobileNav ? 'block' : 'none';
  }

}
