import { Component, OnInit } from '@angular/core';
import { FactoryStatisticsFeatureState } from './.store/factory-statistics-feature.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-factory-statistics',
  templateUrl: './factory-statistics.component.html',
  styleUrls: ['./factory-statistics.component.css']
})
export class FactoryStatisticsComponent implements OnInit {

  constructor(private store: Store<FactoryStatisticsFeatureState>) { }

  ngOnInit(): void {
  }

}
