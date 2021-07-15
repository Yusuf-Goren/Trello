import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { pipelineTEXTS, contentTEXTS, relaunchTEXTS, inProgressTEXT, editingTEXTS } from '../mock-texts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = new FormControl('')

  // Mock Texts

  pTexts = pipelineTEXTS;
  cTexts = contentTEXTS;
  rTexts = relaunchTEXTS;
  iTexts = inProgressTEXT
  eTexts = editingTEXTS

  // For random number

  dummynum = Math.floor(Math.random() * 10);
  randomNumber = this.dummynum

  // Adding new cards

  addEtext() {
    this.eTexts.push({ text: this.name.value, id: 2, likeNum: this.randomNumber, commentNum: 65 })
  }
  addItext() {
    this.iTexts.push({ text: this.name.value, id: 2, likeNum: this.randomNumber, commentNum: 65 })
  }
  addRtext() {
    this.rTexts.push({ text: this.name.value, id: 2, likeNum: this.randomNumber, commentNum: 65 })

  }
  addCtext(name: any) {
    this.cTexts.push({ text: this.name.value, id: 2, likeNum: this.randomNumber, commentNum: 65 })
  }
  addPtext() {
    this.pTexts.push({ text: this.name.value, id: 2, likeNum: this.randomNumber, commentNum: 65 })
  }
}
