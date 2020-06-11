export interface League {
  id: number;
  name: string;
}

export interface Team {
  id: number;
  name: string;
  founded: string;
  league_id: number;
}
