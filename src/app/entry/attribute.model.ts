export type AttributeType = 'color' | 'visible';

export interface Attribute {
  id: number;
  type: AttributeType;
  name: string;
  hint: string;
  target: string;
  value: string;
  updatedAt: Date;
}
