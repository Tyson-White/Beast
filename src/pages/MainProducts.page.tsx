import {useCallback, useEffect, useState} from 'react';

import Slider from "../components/slider/Slider.tsx";
import Select from "../components/Selects/Select.tsx";
import {useAppSelector, useAppDispatch} from "../store/hooks/hooks.ts";
import {setSeasonValue, setThingTypeValue, setThingValue} from "../store/slices/selectSlice.ts";
import ProductCard from "../components/ProductCard.tsx";
import {useGetProductsQuery} from "../store/api/beast.api.ts";

import debounce from "lodash.debounce"
import Skeleton from "../components/Skeleton.tsx";

// SliderBanner backgrounds

// thing List Type
interface IThing {
    name: string,
    list: string[]
}

const MainProductsPage = () => {
    const PAGE_LIMIT: number = 12

    const dispatch = useAppDispatch()
    const season:string[] = ["Summer", "Spring", "Winter", "Autumn"]
    const thing:string[] = ["Clothes", "Shoes", "Outerwear"]
    const thingType:IThing[] = [
        {
            name: "All",
            list: ["T-shirts", "Dress", "Pants", "Sneakers", "Boots", "Jackets", "Coat", "Windbreakers"]
        },
        {
            name: "Clothes",
            list: ["T-shirts", "Dress", "Pants"]
        },
        {
            name: "Shoes",
            list: ["Sneakers", "Boots"]
        },
        {
            name:"Outerwear",
            list: ["Jackets", "Coat", "Windbreakers"]
        }
    ]

    const [productsPage, setProductsPage] = useState<number>(1)
    const [searchValue, setSearchValue] = useState<string>('')
    const seasonValue = useAppSelector(state => state.select.seasonValue)
    const thingValue = useAppSelector(state => state.select.thingValue)
    const thingTypeValue = useAppSelector(state => state.select.thingTypeValue)
    const [searchDebounce, setSearchDebounce] = useState('')
    const [isVisible, setIsVisible] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true)
        }, 150)
    }, [])

    const {data, isLoading} = useGetProductsQuery({
        page: productsPage,
        limit: PAGE_LIMIT,
        season: seasonValue,
        type: thingValue,
        thingType: thingTypeValue,
        searchValue: searchValue
    })

    const filterData = data?.filter(item => item.productName.toLowerCase().indexOf(searchDebounce.toLowerCase()) >= 0)

    const setValue = useCallback((
        debounce((string: string) => {
            setSearchDebounce(string)
        }, 250)
    ), [])

    const prevPage = (): void => {
        if (productsPage !== 1) {
            setProductsPage(prev => prev - 1)
        }
    }

    const nextPage = (): void => {
        if (data && productsPage !== 2) {
            setProductsPage(prev => prev + 1)
        }
    }

    return (
        <div className={`opacity-0 duration-200 ${isVisible && "opacity-[1.0]"}`}>

            <Slider/>
            <div className={`container h-[100%] max-w-[1100px] mx-auto  relative`}>
                <div className="main_page_header h-[60px] rounded-[2px] my-[20px] flex justify-between">
                    <div className="flex">
                        <Select list={season} onChangeValue={(string) => {
                            dispatch(setSeasonValue(string))
                            dispatch(setThingValue("All"));
                        }}/>
                        <Select list={thing} onChangeValue={(string) => {
                            dispatch(setThingValue(string));
                            dispatch(setThingTypeValue("All"))
                        }} dependence={seasonValue}/>
                        <Select list={thingType.find(item => item.name === thingValue)?.list ?? []}  dependence={thingValue}
                                onChangeValue={(string) => dispatch(setThingTypeValue(string))}
                        />
                    </div>
                    <div className="h-[100%] mr-[30px] flex items-center">
                        <div className="flex items-center border-b-[1px]">
                            <svg className="mr-[10px]" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.9281 15.9463L22 22M18.5 9.75C18.5 14.5824 14.5824 18.5 9.75 18.5C4.9175 18.5 1 14.5824 1 9.75C1 4.9175 4.9175 1 9.75 1C14.5824 1 18.5 4.9175 18.5 9.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <input onChange={e => {
                                setSearchValue(e.target.value);
                                setValue(e.target.value)
                            }} type="text" value={searchValue} className="font-MyFont bg-[#0000] text-white outline-none h-[40px] placeholder:text-white" placeholder="Search..."/>
                        </div>

                    </div>
                </div>
                <div className="grid grid-cols-4 justify-items-start gap-12">
                    {data?.length === 0 || data?.filter(item => item.productName.indexOf(searchDebounce) >= 0).length === 0 &&
                        <div className="h-[390px]">

                        </div>
                    }
                    {isLoading ? [...new Array(PAGE_LIMIT)].map(() => (
                        <Skeleton/>
                    )) :
                        searchValue ? filterData?.map(item => (
                            <ProductCard
                                key={item.productID}
                                imgURL={item.imgURL}
                                productID={item.productID}
                                productName={item.productName}
                                productPrice={item.productPrice}
                                productColors={item.productColors}
                                season={item.season}
                                type={item.type}
                                thingType={item.thingType}
                            />
                        )) : data?.map(item => (
                            <ProductCard
                                key={item.productID}
                                imgURL={item.imgURL}
                                productID={item.productID}
                                productName={item.productName}
                                productPrice={item.productPrice}
                                productColors={item.productColors}
                                season={item.season}
                                type={item.type}
                                thingType={item.thingType}
                            />
                        ))
                    }

                </div>
                <div className="w-[300px] mx-auto flex justify-between items-center mt-[45px]">
                    <button onClick={() => prevPage()} className="h-[43px] w-[43px] hover:bg-[#c2c2c2] flex items-center justify-center rounded-[2px]">
                    <svg  className="rotate-90 cursor-pointer hover:bg-[#c2c2c2]" width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-[#282828]" d="M0.532697 1.13069C-0.177566 1.84092 -0.177566 2.99253 0.532697 3.70274L9.43019 12.5915C10.851 14.0108 13.1531 14.0103 14.5732 12.5904L23.4672 3.69619C24.1776 2.98598 24.1776 1.83437 23.4672 1.12413C22.757 0.413865 21.6054 0.413865 20.8952 1.12413L13.2828 8.73657C12.5726 9.44696 11.421 9.44678 10.7107 8.73657L3.10474 1.13069C2.3945 0.42043 1.24294 0.42043 0.532697 1.13069Z" fill="#C9C9C9"/>
                    </svg>
                    </button>
                    {data && [...new Array(2)].map((_, index) => (
                        <button key={index + 1} className={`h-[43px] w-[43px]  font-bold ${productsPage === index + 1 && 'bg-[#282828] text-white text-[20px] rounded-[2px]'}`}
                            onClick={() => setProductsPage(index + 1)}
                        >{index + 1}</button>
                    ))}
                    <button onClick={() => nextPage()} className="h-[43px] w-[43px] hover:bg-[#c2c2c2] cursor-pointer flex items-center justify-center rounded-[2px]">
                    <svg className="-rotate-90 " width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-[#282828]" d="M0.532697 1.13069C-0.177566 1.84092 -0.177566 2.99253 0.532697 3.70274L9.43019 12.5915C10.851 14.0108 13.1531 14.0103 14.5732 12.5904L23.4672 3.69619C24.1776 2.98598 24.1776 1.83437 23.4672 1.12413C22.757 0.413865 21.6054 0.413865 20.8952 1.12413L13.2828 8.73657C12.5726 9.44696 11.421 9.44678 10.7107 8.73657L3.10474 1.13069C2.3945 0.42043 1.24294 0.42043 0.532697 1.13069Z" fill="#C9C9C9"/>
                    </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainProductsPage;