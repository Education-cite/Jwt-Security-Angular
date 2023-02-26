import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowproductimagesDialogComponent } from './showproductimages-dialog.component';

describe('ShowproductimagesDialogComponent', () => {
  let component: ShowproductimagesDialogComponent;
  let fixture: ComponentFixture<ShowproductimagesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowproductimagesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowproductimagesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
