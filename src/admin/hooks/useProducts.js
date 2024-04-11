import { useMutation, useQuery } from "@tanstack/react-query"
import { createProduct, getProducts } from "../api/productsApi";





export const useProducts = () => {

    const products = useQuery({
        queryKey: ['products'],
        queryFn: getProducts
    });

    

    return products;

}
