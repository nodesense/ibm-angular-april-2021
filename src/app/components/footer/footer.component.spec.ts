import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

fdescribe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ // create a custom module only for testing
      declarations: [ FooterComponent ]
    })
    .compileComponents(); // JIT mode, for testing
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // asking angular to start detect if any data change to render
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.highlight).toBe(false)
  });

  it("test html", () => {
    component.year = 2021
    component.company = "shopx"
    // check changes to data, apply on html
    fixture.detectChanges();
    const html: HTMLElement = fixture.nativeElement;
    console.log("********", html.textContent)

    expect(html.textContent).toContain("shopx");
  })
});
