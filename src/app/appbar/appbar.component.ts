import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent implements OnInit {

  alertIcon = "notifications_none"
  constructor() { }
  ngOnInit(): void {
  }

  // if alertIcon clicked change notification icon

  onClickAlert(alertIcon: string) {
    if (alertIcon === "notifications_none") {
      this.alertIcon = "notifications"
      return alertIcon
    }
    else {
      this.alertIcon = "notifications_none"
      return alertIcon
    }
  }

}
