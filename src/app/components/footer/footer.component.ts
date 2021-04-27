import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // Import is for property binding
  // or accepting parameter from parent component
  @Input()
  year: number;

  @Input()
  company: string;

  @Input()
  branches: string[];


  highlight = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
