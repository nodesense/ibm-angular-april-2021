import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

 
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  build = environment.build;
  
  // Input is for property binding
  // or accepting data/value/input from parent component
  @Input()
  year: number;

  @Input()
  company: string;

  @Input()
  branches: string[];

  today: Date = new Date();


  highlight = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
