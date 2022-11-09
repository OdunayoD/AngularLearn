import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Heroes } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroe: string = 'captain america';

  hero: Hero = {
    name: 'WonderWoman',
    id: 1,
    age: 35,
    gender:'Female',
    superPower: 'Flight',
    food: 'Mac and Cheese'
  };

  


  constructor() { }

  ngOnInit(): void {

    this.heroe = 'Spiderman';


  }

}

