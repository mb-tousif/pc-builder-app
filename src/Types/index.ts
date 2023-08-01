export enum ECategory {
  CPU_Processor = "CPU",
  RAM = "RAM",
  Storage_Device = "Storage Device",
  MOTHERBOARD = "Motherboard",
  PSU = "Power Supply Unit",
  MONITOR = "Monitor",
  Others = "Other",
}

export type TProducts = {
  _id: string;
  name: string;
  images: string;
  category: ECategory;
  Price: string;
  Status: string;
  rating: number;
  Brand: string;
  keyFeatures: string[];
  description: string;
};
