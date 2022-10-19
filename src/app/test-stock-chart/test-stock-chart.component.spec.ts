import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestStockChartComponent } from './test-stock-chart.component';

describe('TestStockChartComponent', () => {
  let component: TestStockChartComponent;
  let fixture: ComponentFixture<TestStockChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestStockChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestStockChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
