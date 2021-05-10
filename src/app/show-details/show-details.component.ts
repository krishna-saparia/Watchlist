import { Component, OnInit } from '@angular/core';
import { Episode } from '../models/episode.model';
import { Show } from '../models/show.model';
import {ActivatedRoute} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  show: Show;
  episodes: MatTableDataSource<Episode>;
  tableHeaders: Array<string>;
  constructor(private route: ActivatedRoute) {
    this.tableHeaders = ['number', 'name', 'aired', 'summary'];
  }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
    //   this.showService.getShowId(p.id).subscribe((show) => {
    //     this.show = show;
    //   });
    //   this.showService.getEpisode().subscribe((eps) => {
    //     this.episodes = new MatTableDataSource<Episode>(eps);
    //   });
    });
  }
  applyFilter(e: Event): void {
    const filterValue = (e.target as HTMLInputElement).value;
    this.episodes.filter = filterValue.trim().toLowerCase();
  }
}
