import { Component, OnInit } from '@angular/core';
import { Show } from '../models/show.model';
import {ShowService} from '../service/show.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  Shows: Array<Show>;
  query: string;
  constructor(private showService: ShowService, private route: ActivatedRoute) {
    // this.showService.getShow().subscribe(
    //   (s) => {
    //     this.Shows = s;
    //   });
    this.query = this.route.snapshot.params.query;
  }

  ngOnInit(): void {
    this.route.params.subscribe((p) => { this.query = p.query; });
    this.showService.getShow().subscribe((s) => { this.Shows = s; });
  }

}
