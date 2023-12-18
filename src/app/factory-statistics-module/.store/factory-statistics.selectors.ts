import { createFeatureSelector } from '@ngrx/store';
import { FactoryStatisticsFeatureState } from './factory-statistics-feature.state';

export const factoryStatisticsFeatureState = createFeatureSelector<FactoryStatisticsFeatureState>('factoryStatisticsFeature');
