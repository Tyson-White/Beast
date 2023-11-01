import {User} from "../types/types.ts";

export interface SelectState {
    seasonValue: string,
    thingValue: string,
    thingTypeValue: string
}
export interface IProduct {
    productID: number
    productName: string
    imgURL: string
    season: string
    type: string
    thingType: string
    productPrice: number
    productColors: string[]
}
export interface IBanner {
    img: string,
    title: string,
    subtitle: string
}
export interface userState {
    isAuth: boolean,
    token: string,
    user: User
}

export interface appState {
    isLoading: boolean
}

export interface ISelect {
    list: string[]
    onChangeValue?: (string: string) => void,
    dependence?: string
}