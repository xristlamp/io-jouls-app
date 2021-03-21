import { Component, OnInit } from '@angular/core';
import { title } from 'node:process';
import {earings} from '../../prducts/earings';
@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  Earings:earings[];
  constructor() { }

  ngOnInit(): void {
   this.Earings=[
      {
        id:1,
        title:'earings1',
        location:"../../assets/earings/earing_sample.png"
      }
    ]
  }

}
