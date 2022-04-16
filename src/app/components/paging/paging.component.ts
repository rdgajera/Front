import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css'],
})
export class PagingComponent implements OnInit {
  @Input() page: number;

  @Output() newPage: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  previous() {
    if (this.page > 1) {
      this.changePage(this.page - 1);
    }
  }

  next() {
    this.changePage(this.page + 1);
  }

  changePage(num: number) {
    this.newPage.emit(num);
  }
}
