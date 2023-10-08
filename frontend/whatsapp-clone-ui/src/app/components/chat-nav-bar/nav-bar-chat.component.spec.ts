import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarChatComponent } from './nav-bar-chat.component';

describe('NavBarChatComponent', () => {
  let component: NavBarChatComponent;
  let fixture: ComponentFixture<NavBarChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarChatComponent]
    });
    fixture = TestBed.createComponent(NavBarChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
