import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageLikes = 0;

  constructor() { }

  ngOnInit(): void {
  }

  up() {
    this.pageLikes += 1
  }

}
