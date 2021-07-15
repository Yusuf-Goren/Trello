import { Component, OnInit } from '@angular/core';
import { STORIES } from '../mock-pics';

@Component({
  selector: 'app-editbar',
  templateUrl: './editbar.component.html',
  styleUrls: ['./editbar.component.css']
})
export class EditbarComponent implements OnInit {

  stories = STORIES;
  starIcon = "star"
  constructor() { }

  ngOnInit(): void {
  }

  // if starIcon clicked change star icon

  onClick(starIcon: string) {
    if (starIcon === "star") {
      this.starIcon = "star_border"
      return starIcon
    }
    else {
      this.starIcon = "star"
      return starIcon
    }
  }
}
