import { Component, OnInit } from '@angular/core';
import { Show } from '../models/show.model';
import {TvmazeService} from '../service/tvmaze.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  Shows: Array<Show>;
  query: string;
  constructor(private route: ActivatedRoute, private tvService: TvmazeService) {
    this.query = this.route.snapshot.params.query;
  }

  ngOnInit(): void {
    this.route.params.subscribe((p) => { this.query = p.query; });
    this.tvService.getShows(this.query).subscribe(
      (shows) => { this.Shows = shows; }
    );
  }

}
