export interface IPlant {
  id: string;
  name: string;
  imageUrl: string;
  environment: {
    indoor: boolean;
    outdoor: boolean;
  };
  description: string;
  growingInstructions: string;
}
