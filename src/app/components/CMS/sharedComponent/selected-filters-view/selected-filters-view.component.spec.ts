import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedFiltersViewComponent } from './selected-filters-view.component';

describe('SelectedFltersViewComponent', () => {
  let component: SelectedFiltersViewComponent;
  let fixture: ComponentFixture<SelectedFiltersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedFiltersViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedFiltersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
