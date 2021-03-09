import { Component, OnInit } from '@angular/core';
import { Episode } from '../models/episode.model';
import { Show } from '../models/show.model';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  show: Show;
  episodes: Array<Episode>;
  tableHeaders: Array<string>;
  constructor() {
    this.tableHeaders = ['season', 'episode', 'name', 'aired', 'summary'];

    this.episodes = [
      new Episode({
        id: 101,
        name: 'pilot',
        season: 1,
        episode: 1,
        airdate: '2021-02-02',
        summary: 'The pilot episode.'
      }),
      new Episode({
        id: 102,
        name: 'second',
        season: 1,
        episode: 2,
        airdate: '2021-02-02',
        summary: 'The pilot episode.'
      }),
      new Episode({
        id: 201,
        name: 'Second pilot',
        season: 2,
        episode: 1,
        airdate: '2021-02-02',
        summary: 'The pilot episode.'
      }),
      new Episode({
        id: 202,
        name: 'pilot',
        season: 2,
        episode: 2,
        airdate: '2021-02-02',
        summary: 'The pilot episode.'
      }),
      new Episode({
        id: 203,
        name: 'pilot',
        season: 2,
        episode: 3,
        airdate: '2021-02-02',
        summary: 'The pilot episode.'
      }),
    ];

    this.show = new Show({
      name: 'Smallville',
      language: 'English',
      genres: ['Sci-Fi', 'Action', 'Adventure'],
      id: 210,
      summary: 'A show about Superman as a teenager.',
      status: 'ongoing',
      image: 'https://static.tvmaze.com/uploads/images/medium_portrait/231/579166.jpg'
    });
  }

  ngOnInit(): void {
  }

}
