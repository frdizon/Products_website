export interface TProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    images: string[];
}

export type TProducts = TProduct[];