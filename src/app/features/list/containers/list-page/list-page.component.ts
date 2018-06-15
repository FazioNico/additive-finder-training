import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AdditiveService } from '../../../../shared/services/additive/additive.service';
import { ITools, getColor, getTXT } from '../../../../shared/utils/level-tools/level-tools';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListPageComponent implements OnInit {

  public list$: Observable<any[]>;
  private _tools: ITools = {getColor, getTXT};

  constructor(
    private _router: Router,
    private _additive: AdditiveService
  ) { }

  ngOnInit() {
    this._loadAllAdditive();
  }

  goDetail(enumber: string): void {
    if (!enumber) {
      // TODO: dispatch Error
      return;
    }
    this._router.navigate(['detail/' + enumber]);
  }

  private _loadAllAdditive(): void {
    this.list$ =  this._additive.load().pipe(
      switchMap((data: any) => {
        data.map(item => item.getColor = this._tools.getColor(item.level));
        data.map(item => item.getTXT = this._tools.getTXT(item.level));
        return of(data);
      })
    );
  }
}
