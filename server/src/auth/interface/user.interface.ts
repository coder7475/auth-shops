export interface IShop {
  shop_id: string;
  shop_name: string;
  user_id: string;
}

export interface IUser {
  user_id: string;
  user_name: string;
  createdAt: Date;
  shops: IShop[];
}
