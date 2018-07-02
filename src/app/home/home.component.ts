import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ukwazi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

//   openLeftSideBar() {
//     document.getElementById("leftSideBar").style.width = "250px";
//     document.getElementById("main-content").style.marginLeft = "250px";
// }
}
