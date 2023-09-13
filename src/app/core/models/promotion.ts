export interface Promotion {
  id: number;
  name: string;
  description: string;
  initDate: string;
  endDate: string;
  discountPercentage?: Float32Array,
  business: {
    name: string;
  };
}
