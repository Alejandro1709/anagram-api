export type AnagramResponse = {
  next?: {
    page: number;
    limit: number;
  };
  prev?: {
    page: number;
    limit: number;
  };
  results?: string[];
  total?: number;
};
