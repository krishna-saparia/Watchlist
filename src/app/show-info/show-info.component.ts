import {Component, Input, OnInit} from '@angular/core';
import { Show } from '../models/show.model';
import { PouchService } from '../service/pouch.service';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfoComponent implements OnInit {
  @Input() show: Show;

  constructor(private pouch: PouchService) {
  }

  ngOnInit(): void {
  }

  addShow(): void {
    this.pouch.addShow(this.show);
  }

  removeShow(): void {
    this.pouch.removeShow(this.show);
  }
}
