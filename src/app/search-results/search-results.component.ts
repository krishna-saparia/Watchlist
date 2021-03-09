import { Component, OnInit } from '@angular/core';
import { Show } from '../models/show.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  Shows: Array<Show>;
  constructor() {
    this.Shows = [new Show({
      name: 'Doctor Who',
      language: 'English',
      genres: ['Sci-Fi', 'Action', 'Adventure'],
      id: 210,
      summary: 'A show about a time travelling alien called The Doctor.',
      status: 'ongoing',
      image: 'https://static.tvmaze.com/uploads/images/medium_portrait/231/579166.jpg'
    }),
      new Show({
        name: 'The Magicians',
        language: 'English',
        genres: ['Sci-Fi', 'Action', 'Adventure'],
        id: 210,
        summary: 'A show about magicians and their trauma.',
        status: 'ongoing',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/231/579166.jpg'
      }),
      new Show({
        name: 'Smallville',
        language: 'English',
        genres: ['Sci-Fi', 'Action', 'Adventure'],
        id: 210,
        summary: 'A show about Superman as a teenager.',
        status: 'ongoing',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/231/579166.jpg'
      })];
  }

  ngOnInit(): void {
  }

}
