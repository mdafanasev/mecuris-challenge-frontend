export interface Viewer3DObject {
  objectUrl: string;
}

export interface Customization {
  type: 'color' | 'visible';
  target: string;
  value: string;
}

export interface Size {
  width: number;
  height: number;
}
