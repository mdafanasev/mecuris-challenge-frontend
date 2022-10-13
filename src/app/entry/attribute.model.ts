import { AttributeType } from '../viewer/viewer.model';

export interface Attribute {
  id: number;
  type: AttributeType;
  name: string;
  hint: string;
  target: string;
  value: string;
  updatedAt: Date;
}
