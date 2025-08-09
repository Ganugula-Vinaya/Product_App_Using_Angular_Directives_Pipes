//this model file will have interface definition for the products

export interface Product{
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    description?: string;
}