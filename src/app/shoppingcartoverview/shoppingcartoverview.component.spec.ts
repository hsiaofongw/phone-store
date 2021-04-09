import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartOverviewComponent } from './shoppingcartoverview.component';

describe('ShoppingcartoverviewComponent', () => {
  let component: ShoppingCartOverviewComponent;
  let fixture: ComponentFixture<ShoppingCartOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
