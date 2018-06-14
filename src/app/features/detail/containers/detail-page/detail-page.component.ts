import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { GenericHttpService } from '../../../../shared/services/http/generic-http.service';
import { AdditiveService } from '../../../../shared/services/additive/additive.service';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  public title: Observable<any[]>;
  public desc: Observable<any>;

  constructor(
    private _route: ActivatedRoute,
    private _http: GenericHttpService,
    private _additive: AdditiveService
  ) { }

  ngOnInit() {
    const { enumber } = this._route.snapshot.params;
    if (!enumber) {
      // TODO: display error
      return;
    }
    console.log(':: enumber', enumber);
    this._getAdditiveTitle(enumber);
    this._getWikiDetail(enumber);
  }

  private _getAdditiveTitle(enumber: string): void {
    this.title =  this._additive.load().pipe(
      switchMap((data: any[]) =>
        of(data.find(additif => additif.id === enumber)))
    );
  }

  private _getWikiDetail(enumber: string): void {

  }

}
