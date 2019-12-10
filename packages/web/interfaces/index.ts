export type FavorisTypes = Array<string>;
export type PantriesTypes = Array<string>;
export interface User {
  id: number;
  username: string;
  pantries: PantriesTypes;
  favoris: FavorisTypes;
}
export interface Profil {
  user: null | User;
  token: null | string;
}
export type ReceiveUserPantries = (pantries: PantriesTypes) => any;
export type ReceiveUserFavoris = (favoris: FavorisTypes) => any;
export type UpdatePantries = (pantries: PantriesTypes) => any;
export type UpdateFavoris = (favoris: FavorisTypes) => any;
export type RemovePantries = (item: string) => any;
export type RemoveFavoris = (item: string) => any;
