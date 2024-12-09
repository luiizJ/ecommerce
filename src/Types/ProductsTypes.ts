export interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: number;
  quantity: number;
}
export interface SidebarProductsProps {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}