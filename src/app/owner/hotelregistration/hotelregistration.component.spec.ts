import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelregistrationComponent } from './hotelregistration.component';

describe('HotelregistrationComponent', () => {
  let component: HotelregistrationComponent;
  let fixture: ComponentFixture<HotelregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
