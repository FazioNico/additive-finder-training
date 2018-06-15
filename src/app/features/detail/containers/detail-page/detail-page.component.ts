import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { GenericHttpService } from '../../../../shared/services/http/generic-http.service';
import { AdditiveService } from '../../../../shared/services/additive/additive.service';
import { getColor, getTXT, ITools } from '../../../../shared/utils/level-tools/level-tools';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  public eNumber: string;
  public title$: Observable<any[]>;
  public desc$: Observable<any>;
  private _tools: ITools = {getColor, getTXT};

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: GenericHttpService,
    private _additive: AdditiveService
  ) { }

  ngOnInit() {
    const { enumber } = this._route.snapshot.params;
    if (!enumber) {
      // TODO: display error
      return;
    }
    this.eNumber = enumber;
    console.log(':: enumber', this.eNumber);
    this._getAdditiveTitle(this.eNumber);
    this._getWikiDetail(this.eNumber);
  }

  back() {
    this._router.navigate(['']);
  }

  private _getAdditiveTitle(enumber: string): void {
    this.title$ =  this._additive.load().pipe(
      switchMap((data: any) => {
        data.map(item => item.getColor = this._tools.getColor(item.level));
        data.map(item => item.getTXT = this._tools.getTXT(item.level));
        return of(data);
      }),
      switchMap((data: any[]) =>
        of(data.find(additif => additif.id === enumber)))
    );
  }

  private _getWikiDetail(enumber: string): void {
    this.desc$ = this._http.get('wikipedia', `/e${enumber}`);
  }

}
