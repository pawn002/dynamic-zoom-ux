import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageContainerComponent } from './image-container.component';

describe('ImageContainerComponent', () => {
  let component: ImageContainerComponent;
  let fixture: ComponentFixture<ImageContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageContainerComponent]
    });
    fixture = TestBed.createComponent(ImageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
