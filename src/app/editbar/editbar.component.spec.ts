import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbarComponent } from './editbar.component';

describe('EditbarComponent', () => {
  let component: EditbarComponent;
  let fixture: ComponentFixture<EditbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
