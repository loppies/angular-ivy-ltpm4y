import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
})
export class RandomComponent implements OnInit {
  @Input() ran1: string;
  @Input() ran11: string;

  constructor() {}

  ngOnInit() {}
}
