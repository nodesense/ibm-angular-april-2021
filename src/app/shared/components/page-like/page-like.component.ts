import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-like',
  templateUrl: './page-like.component.html',
  styleUrls: ['./page-like.component.scss']
})
export class PageLikeComponent implements OnInit {

  // two way binding [(likes)]="aboutLikes"
  // Input and Output should have same name, in that output should suffix "Change"
  @Input()
  likes: number;

  @Output()
  likesChange:EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  up() {
    this.likesChange.emit(this.likes + 1)
  }

  down() {
    this.likesChange.emit(this.likes - 1)
  }

}
