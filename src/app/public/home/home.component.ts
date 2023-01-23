import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public slides: Array<Slide> = [
    {
      src: 'https://images.unsplash.com/photo-1528357136257-0c25517acfea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: "Terço",
      description: "Terço dos homens"
    },
    {
      src: 'https://images.unsplash.com/photo-1465848059293-208e11dfea17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
      title: "Igreja",
      description: "Igreja X"
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1664006989171-ff0058651908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      title: "Santíssimo",
      description: "Adoração ao santíssimo"
    }
  ] as Array<Slide>

  constructor() { }

  ngOnInit(): void {
  }

}

export interface Slide {
  src: string;
  title: string;
  description: string | undefined;
}