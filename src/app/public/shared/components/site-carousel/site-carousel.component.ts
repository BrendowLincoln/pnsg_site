import { Component, Input, OnInit } from '@angular/core';
import { Slide } from 'src/app/public/home/home.component';

@Component({
  selector: 'site-carousel',
  templateUrl: './site-carousel.component.html',
  styleUrls: ['./site-carousel.component.scss']
})
export class SiteCarouselComponent implements OnInit {

  @Input()
  public slides: Array<Slide> = [];

  public currentIndex: number = 0;

  private _timer: NodeJS.Timer = {} as NodeJS.Timer;

  constructor() { }

  ngOnInit(): void {
    this.automaticSlideTransaction();
  }

  public getCurrentSlideSrc = (): string => `url(${this.slides[this.currentIndex].src})`;

  public goToNextSlide = (): void => {
    const isLastSlide = this.currentIndex === (this.slides.length -1);
    this.currentIndex = isLastSlide ? 0 : ++this.currentIndex;
    this.automaticSlideTransaction();
  }

  public goToPreviousSlide = (): void => {
    const isFirstSlide = this.currentIndex === 0;
    this.currentIndex = isFirstSlide ? (this.slides.length -1) : --this.currentIndex; 
    this.automaticSlideTransaction();
  }

  public goToSlide = (index: number): void => {
    this.currentIndex = index;
    this.automaticSlideTransaction();
  }

  public automaticSlideTransaction = (): void => {
    clearInterval(this._timer);
    this._timer = setInterval(() => this.goToNextSlide(), 5000);
  }

}
