export interface User {
  uuid: string;
  first_name: string;
  primary_email: string;
  last_name: string;
  username: string;
  status: string;
}

export interface TableColumn<T> {
  header: string;
  accessor: keyof T;
}

export interface TableProps<T extends Record<string, React.ReactNode>> {
  data: T[];
  columns: TableColumn<T>[];
  operation?:boolean;
}

export type DataType = User[];
