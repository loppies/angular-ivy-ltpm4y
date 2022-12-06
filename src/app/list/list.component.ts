import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  ids = 0;
  constructor() {}

  people = [];

  ngOnInit() {}

  deletePerson() {
    console.log('elo');
  }

  addPerson(newPerson: string) {
    if (newPerson) {
      this.people.push(newPerson);
    }
    let el = document.getElementById('lista');
    let li = document.createElement('li');
    li.setAttribute('id', 'li' + this.ids.toString());
    li.innerHTML = this.people[this.ids] + '  ';
    let a = document.createElement('a');
    a.innerHTML = 'delete';
    a.setAttribute('href', '#');
    a.setAttribute('id', this.ids.toString());
    a.setAttribute('click', 'this.deletePerson()');
    li.appendChild(a);
    el.appendChild(li);
    this.ids++;
    console.log(li.id);
  }
}
