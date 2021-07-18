import { Component, OnInit } from '@angular/core';

interface Filter {
  name: string;
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Skinet';

  filter: Filter[];
  selectedFilter: Filter;

  constructor() {
    this.filter = [
      { name: 'filter1', value: 'filter1' },
      { name: 'filter2', value: 'filter2' },
      { name: 'filter3', value: 'filter3' },
    ];
  }

  ngOnInit(): void {}
}
