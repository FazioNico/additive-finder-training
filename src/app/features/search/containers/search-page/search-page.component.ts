import { Component, OnInit } from '@angular/core';
import { GenericHttpService } from '../../../../shared/services/http/generic-http.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(
    private _http: GenericHttpService
  ) { }

  public searchValue = '';

  ngOnInit() {
  }

  search(): void {
    console.log('SEARCH: ', this.searchValue);
    if (this.searchValue.length <= 0) {
      // TODO: display form validation error
      return;
    }
    // faire requête http vers service...
  }
}
