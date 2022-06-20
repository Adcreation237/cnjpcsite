import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  img:string = 'assets/images/img5.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
