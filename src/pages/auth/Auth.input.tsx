import {} from 'react';

interface inputProps {
    label: string,
    getValue: (value:string) => void
}

const AuthInput = (props:inputProps) => {
    return (
        <div className="flex flex-col text-start mt-[20px] py-[5px] border-b-[2px]">
            <label htmlFor="" className="text-[20px]">{props.label}</label>
            <input type="text" className="bg-[#ffffff20] rounded-[4px] h-[61px] w-[440px] outline-none
                text-[24px] px-[20px]
                focus:bg-[#cdb58320]
                duration-150
            " placeholder={props.label}
                   onChange={(e) => props.getValue(e.target.value)}
            />
        </div>
    );
};

export default AuthInput;