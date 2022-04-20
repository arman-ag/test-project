export interface userType {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export interface getUserType {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Datum[];
  support: Support;
}
interface Datum {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
interface Support {
  url: string;
  text: string;
}
