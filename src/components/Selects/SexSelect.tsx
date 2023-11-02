import {useState} from 'react';
import arrowSVG from '../../assets/icons/arrow.svg'
const SexSelect = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const [selectedVariant, setSelectedVariant] = useState<string>('MEN')
    const selectVariants:string[] = ['MEN', 'WOMEN']
    return (
        <div className="flex items-center hover:cursor-pointer relative"
             onClick={() => setIsOpened(!isOpened)}
        >
            <div className="Sex_Select flex transitiion-all items-center justify-center w-[107px] h-[38px] rounded-[4px]
            selected mx-auto text-amber-50 text-[20px] font-bold">{selectedVariant}</div>
            <div className={`ml-0 ${isOpened && '-rotate-180'} ease-in duration-100 hover:bg-[#5b5b5b] rounded-[5px] p-[10px]`}>
                <img className="" width={15} src={arrowSVG} alt=""/>
            </div>
            <div className={`  ${isOpened ? "h-260px py-[10px]" : "h-[0px] py-[0px] overflow-hidden"} shadow-md  w-[140px] absolute bg-white rounded-[5px] top-[115%] z-10 text-center flex flex-col`}>
                {selectVariants.map(item => (
                    <div key={item} onClick={() => setSelectedVariant(item)} className={`${selectedVariant === item && 
                    "bg-[#282828] text-white"}
                     rounded-[5px] text-[20px] font-bold mb-[10px] py-[5px] w-[90%] mx-auto last:my-0 ${selectedVariant !== item && 'hover:bg-[#6665]'}`}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SexSelect;