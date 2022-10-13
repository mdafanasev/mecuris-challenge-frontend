import { Attribute } from './attribute.model'

export interface Entry {
  id: number;
  name: string;
  modelUrl: string;
  previewUrl: string;
  createdAt: Date;
  updatedAt: Date;
  attributes: Attribute[];
}
