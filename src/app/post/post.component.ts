import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() text = '';
  @Input() likeNum = 0;
  @Input() commentNum = 0;
  constructor() { }

  ngOnInit(): void {
  }
  thumb = "thumb_up_off_alt"
  comment = "mode_comment"

  // Increasing thumb and commnet numbers

  onClickThumb(thumb: string) {
    if (thumb === "thumb_up_off_alt") {
      this.thumb = "thumb_up"
      this.likeNum += 1;
      return thumb
    }
    else {
      this.thumb = "thumb_up_off_alt"
      this.likeNum -= 1;
      return thumb

    }
  }
  onClickComment(comment: string) {
    if (comment === "mode_comment") {
      this.comment = "insert_comment"
      this.commentNum += 1;
      return comment
    }
    else {
      this.comment = "mode_comment"
      this.commentNum -= 1;
      return comment

    }
  }

}
