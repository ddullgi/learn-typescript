interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
// function fecthProducts(): Promise<Product[]> {
//   // ..
//   return new Promise(shoppingItem);
// }

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수수
type ShoppingItem = Pick<Product, "id" | "name" | "price">;
function displayProductDetail(shoppingItem: ShoppingItem) {}

type ShoppingItem2 = Omit<Product, "brand" | "stock">;

// interface UpadteProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

type UpadteProduct = Partial<Product>;

type Test<T, P extends keyof T> = { [S in P]: T[S] };
type Tst = Test<Product, "id">;

// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
function updateProductItem(productItem: UpadteProduct) {}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}
// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// #1
type UserProfileUpdate1 = {
  username?: UserProfile["username"];
  email?: UserProfile["email"];
  profilePhotoUrl?: UserProfile["profilePhotoUrl"];
};

// #2
type UserProfileUpdate2 = {
  [P in "username" | "email" | "profilePhotoUrl"]?: UserProfile[P];
};
type UserProfileKeys = keyof UserProfile;

// #3
type UserProfileUpdate3 = {
  [P in keyof UserProfile]?: UserProfile[P];
};

// #4
type Subset<T> = {
  [P in keyof T]?: T[P];
};
