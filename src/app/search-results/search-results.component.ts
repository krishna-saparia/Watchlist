import { Component, OnInit } from '@angular/core';
import { Show } from '../models/show.model';
import {ShowService} from '../service/show.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  Shows: Array<Show>;
  constructor(private showService: ShowService) {
    this.showService.getShow().subscribe(
      (s) => {
        this.Shows = s;
      });
  }

  ngOnInit(): void {
  }

}
