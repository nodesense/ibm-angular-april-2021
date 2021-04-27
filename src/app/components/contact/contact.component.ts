import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Address } from 'src/app/shared/models/address';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  headOffice:Address = {city: 'BLR', state: 'KA', pincode: 560001}

  branchOffice: Address; // undefined

  //ElementRef is a wrapper object
  @ViewChild("yourName", {static: true})
  inputElement: ElementRef;

  @ViewChild("myResult", {static: true})
  paraElement: ElementRef;

  address: Address = {city:'', state:'', pincode: 0}


  constructor() { }

  ngOnInit(): void {
    // template variabel/viewchidl is available from ngonInit
    // nativeElement is a real dom/input tag reference
    this.inputElement.nativeElement.value = "hello from ts"
    this.paraElement.nativeElement.textContent = "enter your name and click get name"
    this.inputElement.nativeElement.focus(); // set the cursor on text box

    setTimeout( () => {
      this.branchOffice = {city: 'Pune', state: 'MH', pincode: 460001}
    }, 5000)
  }

  contact(address: Address) {
    console.log("Contact event address ", address)
  }

  btnClick(e: Event) {
    console.log("Event is ", e)
  }


  save() {
    console.log("contact details are ", this.address)
  }

  reset() {
    console.log("Clear form data");
    this.address = {city: '', state:'', pincode: 0}
  }

}
