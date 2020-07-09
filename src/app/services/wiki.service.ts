import {WikiItem} from '../entity/WikiItem';
import {HttpClient} from '@angular/common/http';
import {WikiResponse} from '../response/WikiResponse';
import {stringify} from '@angular/compiler/src/util';
import {Injectable} from '@angular/core';

@Injectable()
export class WikiService {
  constructor(private http: HttpClient){}

  search(text: string, callback: (out: WikiItem[]) => void): void {
    if ( text === undefined || text.trim() === '' ) {
      callback([]);
      return;
    }

    const url = 'http://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=';
    this.http.get(url + text).subscribe((data: WikiResponse) => {
      console.log(data);
      const out: WikiItem[] = data.query.search.map((it => {
        return new WikiItem(it.pageid, it.title, it.snippet, it.timestamp);
      }));
      callback(out);
    });
  }
}
