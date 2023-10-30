import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProduct} from "../../models/models.ts";

interface ProductsGet {
    page: number,
    limit: number,
    season: string,
    type: string,
    thingType: string
}

export const beastApi = createApi({
    reducerPath: 'beastApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5003/'
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], ProductsGet>({
            query: (options) =>
                `products?_limit=8&_page=${options.page}${options.thingType && options.thingType.toLowerCase() !== "all" ? "&thingType=" + options.thingType.toLowerCase() : ''}${options.type && options.type.toLowerCase() !== "all" ? "&type=" + options.type.toLowerCase() : ''}${options.season && options.season.toLowerCase() !== 'all' ? "&season=" + options.season.toLowerCase() : ''}`
                
            
                
                
        })
    })
})

export const { useGetProductsQuery } = beastApi