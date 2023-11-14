export interface GameType {
  id: string;
  name: string;
  image: string;
  minPlayers: number;
  maxPlayers: number;
  type: string;
}

export interface UserType {
  email: string;
  password: string;
  uid: string | null;
}