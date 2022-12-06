import { Component, Inject, OnInit, VERSION } from '@angular/core';
import { RandomService } from './random/random.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  text = 'people';
  ran1 = 'Random Component max = 100';
  cos = new RandomService();
  ran11 = this.cos.getRandomInt(100);
  
  ngOnInit(): void {}

  constructor(private myService: RandomService) {    
  
  }
  
}
