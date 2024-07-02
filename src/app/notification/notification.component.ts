import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [ngClass]="{fadeOut:displayNotification}">
                <p>This website uses cookies to provide better user experience</p>
                <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
              </div>`,
  styles: ["div{margin:10px 0px; padding:10px 20px;  text-align:center;}",
          "p{font-size:14px;}" ,
          ".fadeOut{visibility:hidden; opacity:0; transition:visiblity 0s 2s,opacity 2s linear;}",
          ".close{float:right; margin-top: -52px;}"]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayNotification:boolean =false;
  closeNotification()
  {
    this.displayNotification=true;
  }
}
