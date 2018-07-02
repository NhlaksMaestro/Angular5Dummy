import { Component } from '@angular/core';

@Component({
  selector: 'ukwazi-root',
  templateUrl: './ukwazi.component.html',
  styleUrls: ['./ukwazi.component.scss']
})
export class UkwaziComponent {
  mainContentMargin: string;
  title = 'Ufuna Ukwazi?';
  expandRightSideBar: string;
  expandLeftSideBar: string;
  expandFooter: string;
  expandHeader: string;
  headerButtonPosition: string;
  rightSideBarButtonPosition: string;
  leftSidebarButtonPosition: string;
  footerButtonPosition: string;

  constructor() {
    this.mainContentMargin = 'main-content';
    this.expandRightSideBar = 'right-sidebar';
    this.expandLeftSideBar = 'left-sidebar';
    this.expandFooter = 'footer-closed';
    this.expandHeader = 'header-closed';
    this.headerButtonPosition = 'header-button';
    this.rightSideBarButtonPosition = 'right-sidebar-button';
    this.leftSidebarButtonPosition = 'left-sidebar-button';
    this.footerButtonPosition = 'footer-button';
  }
  openLeftSideBar(): void {
    this.expandLeftSideBar = ' left-sidebar-expand';
    this.mainContentMargin = ' main-content-left-side-expand';
  }

  leftSideBarClosed(value): void {
    this.expandLeftSideBar = 'left-sidebar';
    this.mainContentMargin = 'main-content';
    this.leftSidebarButtonPosition = 'left-sidebar-button';
  }

  openRightSideBar(): void {
    this.expandRightSideBar = 'right-sidebar-button right-sidebar-expand';
    this.mainContentMargin = ' main-content-right-side-expand';
    this.rightSideBarButtonPosition = 'right-sidebar-button';
  }

  rightSideBarClosed(value): void {
    this.expandRightSideBar = 'right-sidebar';
    this.mainContentMargin = 'main-content';
    this.rightSideBarButtonPosition = 'right-sidebar-button';
  }

  openFooter(): void {
    this.expandFooter = 'footer';
    this.mainContentMargin = ' main-content-bottom-expand';
  }

  closeFooter(value): void {
    this.expandFooter = 'footer-closed';
    this.mainContentMargin = 'main-content';
    this.footerButtonPosition = 'footer-button';
  }

  openHeader(): void {
    this.expandHeader = 'header';
    this.mainContentMargin = ' main-content-top-expand';
  }

  closeHeader(value): void {
    this.expandHeader = 'header-closed';
    this.mainContentMargin = 'main-content';
    this.headerButtonPosition = 'header-button';
  }
}
