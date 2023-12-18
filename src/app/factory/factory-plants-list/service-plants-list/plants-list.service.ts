import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of, take, tap } from 'rxjs';
import { Plant } from './plant.model';

@Injectable()
export class PlantListService {

   plants: Plant[] = [
    {
      'id': 2,
      'name': 'Fiddle Leaf Fig',
      'picture': 'https://testfilesforlangai.blob.core.windows.net/angularimages/2.png?sp=r&st=2023-12-17T19:51:16Z&se=2030-12-18T03:51:16Z&spr=https&sv=2022-11-02&sr=b&sig=2ewALFJK20J0agvWOS8XEfRr0oRI0Nzepc51N2m7z68%3D',
      'plantBedId': 119,
      'amount': 12,
      'condition': 'Poor',
      'developmentPhase': 'Vegetative',
      'plantingDate': new Date(2023, 9, 21),
      'harvestDate': new Date(2024, 2, 1)
    },
    {
      'id': 3,
      'name': 'Spider Plant',
      'picture': 'https://testfilesforlangai.blob.core.windows.net/angularimages/3.png?sp=r&st=2023-12-17T19:51:54Z&se=2040-12-18T03:51:54Z&spr=https&sv=2022-11-02&sr=b&sig=i63MIn7C30iD5glJzlZQ%2F3WiEgYe1aEVN15a6ObondA%3D',
      'plantBedId': 167,
      'amount': 15,
      'condition': 'Fair',
      'developmentPhase': 'Flowering',
      'plantingDate': new Date(2023, 10, 10),
      'harvestDate': new Date(2023, 12, 16)
    },
    {
      'id': 4,
      'name': 'Fiddle Leaf Fig',
      'picture': 'https://testfilesforlangai.blob.core.windows.net/angularimages/4.png?sp=r&st=2023-12-17T19:52:10Z&se=2040-12-18T03:52:10Z&spr=https&sv=2022-11-02&sr=b&sig=jvR82pVrn4%2Bsvm4yCH8YWfmfBe7GIq0bp0yvRw2TIdo%3D',
      'plantBedId': 169,
      'amount': 42,
      'condition': 'Fair',
      'developmentPhase': 'Vegetative',
      'plantingDate': new Date(2023, 11, 30),
      'harvestDate': new Date(2024, 6, 17)
    },
    {
      'id': 5,
      'name': 'Peace Lily',
      'picture': 'https://testfilesforlangai.blob.core.windows.net/angularimages/5.png?sp=r&st=2023-12-17T19:52:24Z&se=2040-12-18T03:52:24Z&spr=https&sv=2022-11-02&sr=b&sig=ZIXW7CH8s1xUTrozxVSM6%2FL%2BMHiqzcc1VEYF0pauEkE%3D',
      'plantBedId': 176,
      'amount': 4,
      'condition': 'Good',
      'developmentPhase': 'Vegetative',
      'plantingDate': new Date(2023, 9, 18),
      'harvestDate': new Date(2024, 2, 17)
    },
    {
      'id': 7,
      'name': 'Fiddle Leaf Fig',
      'picture': 'path/to/fiddle_leaf_fig_image.jpg',
      'plantBedId': 178,
      'amount': 21,
      'condition': 'Poor',
      'developmentPhase': 'Fruiting',
      'plantingDate': new Date(2023, 9, 19),
      'harvestDate': new Date(2024, 3, 31)
    },
    {
      'id': 8,
      'name': 'Jade Plant',
      'picture': 'path/to/jade_plant_image.jpg',
      'plantBedId': 174,
      'amount': 12,
      'condition': 'Fair',
      'developmentPhase': 'Seedling',
      'plantingDate': new Date(2023, 10, 18),
      'harvestDate': new Date(2024, 4, 4)
    },
    {
      'id': 9,
      'name': 'Aloe Vera',
      'picture': 'path/to/aloe_vera_image.jpg',
      'plantBedId': 128,
      'amount': 13,
      'condition': 'Fair',
      'developmentPhase': 'Vegetative',
      'plantingDate': new Date(2023, 10, 30),
      'harvestDate': new Date(2024, 3, 21)
    },
    {
      'id': 10,
      'name': 'Fiddle Leaf Fig',
      'picture': 'path/to/fiddle_leaf_fig_image.jpg',
      'plantBedId': 174,
      'amount': 48,
      'condition': 'Good',
      'developmentPhase': 'Flowering',
      'plantingDate': new Date(2023, 11, 21),
      'harvestDate': new Date(2024, 2, 29)
    }];

  private plantsSubject = new BehaviorSubject<Plant[]>(this.plants);
  private plants$: Observable<Plant[]> = this.plantsSubject.asObservable();

  constructor() { }

  getAllPlants(): Observable<Plant[]> {
    return this.plants$.pipe(take(1), tap(p => console.log('getAllPlants', p)));
  }

  getFilteredPlants(filterFunc: (plant: Plant) => boolean): Observable<Plant[]> {
    return this.plants$.pipe(map(plants => plants.filter(filterFunc)));
  }

  addPlant(newPlant: Plant): void {
    this.plants.push(newPlant);
    this.plantsSubject.next(this.plants);
  }

  removePlant(plantId: number): void {
    this.plants = this.plants.filter(plant => plant.id !== plantId);
    this.plantsSubject.next(this.plants);
  }

  editPlant(updatedPlant: Plant): void {
    const plantIndex = this.plants.findIndex(plant => plant.id === updatedPlant.id);
    if (plantIndex !== -1) {
      this.plants[plantIndex] = updatedPlant;
      this.plantsSubject.next(this.plants);
    }
  }
}
