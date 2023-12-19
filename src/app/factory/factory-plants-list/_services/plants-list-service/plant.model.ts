export interface PlantListItem {
  id: string;
  name: string;
  picture: string;
  plantBedId: number;
  amount: number;
  condition: string;
  developmentPhase: string;
  plantingDate: Date;
  harvestDate: Date;
}
