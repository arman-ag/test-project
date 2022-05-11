export interface useMutationType {
  id: number;
  data: DataType;
}
export interface DataType {
  name: string;
  job?: string;
}
export interface putResType {
  name: string;
  job: string;
  updatedAt: Date;
}
