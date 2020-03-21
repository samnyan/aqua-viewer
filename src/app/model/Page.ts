export interface Page<T> {
  content: T;
  page: number;
  totalPages: number;
  totalElements: number;
}
