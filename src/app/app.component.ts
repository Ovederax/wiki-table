import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wiki-table';
  wiki = [
    {
      pageid: 18846922,
      title: 'Craig Noone',
      snippet: '<span class="searchmatch">Craig</span> Stephen <span class="searchmatch">Noone</span> (born 17 November 1987) is an English professional footballer who plays as a winger for Melbourne City. Born in Kirkby, he has also',
      timestamp: '2020-06-20T09:49:26Z'
    }
  ];
}
