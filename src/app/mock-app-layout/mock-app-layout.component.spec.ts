import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockAppLayoutComponent } from './mock-app-layout.component';

describe('MockAppLayoutComponent', () => {
  let component: MockAppLayoutComponent;
  let fixture: ComponentFixture<MockAppLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockAppLayoutComponent]
    });
    fixture = TestBed.createComponent(MockAppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
