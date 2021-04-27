import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../../models/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input()
  address: Address;

  // child to parent done through events
  // event binding ()
  // emit an event from child component, the parent should subscribe
  @Output()
  contactEvent: EventEmitter<Address> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  contactUs() {
    //todo: to call parent componnet and pass the address
    // child to parent communication
    // trigger/emit an event, the parent should subscribe in html using event binding ()
    // this.address is passed as $event in parent
    this.contactEvent.emit(this.address); 
  }

}
