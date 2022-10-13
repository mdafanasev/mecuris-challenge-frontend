export interface Viewer3DObject {
  objectUrl: string;
}

export interface Customization {
  type: AttributeType;
  target: string;
  value: string;
}

export interface Size {
  width: number;
  height: number;
}

export type AttributeType = 'color' | 'visible';
