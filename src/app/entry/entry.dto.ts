export interface EntryHttpResponse {
  id: number;
  name: string;
  modelUrl: string;
  previewUrl: string;
  createdAt: string;
  updatedAt: string;
  attributes: {
    id: number;
    type: string;
    name: string;
    hint: string;
    target: string;
    value: string;
    updatedAt: string;
  }[];
}
