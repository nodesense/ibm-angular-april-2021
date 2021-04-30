import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';

import { FooterComponent } from './footer.component';

fdescribe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ // create a custom module only for testing
      declarations: [ FooterComponent,
                      HighlightDirective, // or simpler pattern
      ]
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
    component.branches = ['Bangalore', 'Chennai', 'Pune']
    // check changes to data, apply on html
    fixture.detectChanges();
    const html: HTMLElement = fixture.nativeElement;
    console.log("********", html.textContent)

    expect(html.textContent).toContain("shopx");

    let spans = html.querySelectorAll("span")
    expect(spans.length).toBe(3)
    expect(spans[0].textContent).toContain("Bangalore")
    expect(spans[1].textContent).toContain("Chennai")
  })
});
