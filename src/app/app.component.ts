import {Component, OnInit} from '@angular/core';
import {WikiItem} from './entity/WikiItem';
import {WikiService} from './services/wiki.service';
import {WikiResponse} from './response/WikiResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WikiService]
})
export class AppComponent implements OnInit{
  wiki: WikiItem[] = [new WikiItem(1, '1', '1', '1')];
  text: string;
  lengthOfPage = 3;
  page = 1;
  allPageCount = 1;

  constructor(private wikiService: WikiService) {
  }

  ngOnInit(): void {
    this.wiki = [new WikiItem(1, '1', '1', '1')];
  }

  onSearch(text: string): void {
    const self = this;
    this.wikiService.search(text, (data: WikiItem[]) => {
      this.wiki = data;
      if (self.wiki.length > 0) {
        self.page = 1;
        self.allPageCount = Math.ceil(this.wiki.length / this.lengthOfPage);
      }
    });
  }

  onClickLeft(): void {
    this.page--;
    if (this.page < 1) {
      this.page = 1;
    }
  }

  onClickRight(): void {
    this.page++;

    if (this.page > this.allPageCount) {
      this.page = this.allPageCount;
    }
  }
}
