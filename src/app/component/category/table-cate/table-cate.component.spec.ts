import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCateComponent } from './table-cate.component';

describe('TableCateComponent', () => {
  let component: TableCateComponent;
  let fixture: ComponentFixture<TableCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
