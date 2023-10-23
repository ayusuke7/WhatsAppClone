import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactItemViewComponent } from './contact-item-view.component';

describe('ContactItemComponent', () => {
  let component: ContactItemViewComponent;
  let fixture: ComponentFixture<ContactItemViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactItemViewComponent]
    });
    fixture = TestBed.createComponent(ContactItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
