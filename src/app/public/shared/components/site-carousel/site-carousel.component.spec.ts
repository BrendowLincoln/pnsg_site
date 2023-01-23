import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteCarouselComponent } from './site-carousel.component';

describe('SiteCarouselComponent', () => {
  let component: SiteCarouselComponent;
  let fixture: ComponentFixture<SiteCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
