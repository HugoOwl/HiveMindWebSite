import React from 'react';
type Props = React.InputHTMLAttributes<HTMLInputElement>&{
    suffix?: React.ReactNode
}

const PrimaryInput:React.FC<Props> = ({suffix, ...props})=>{
    return (
        <div className='flex items-center border-[0.5px] rounded-md focus-within:border-gray-500'>
            <input
                {...props} 
                className="flex-1 pr-4 py-3 pl-10 focus:outline-none rounded-md"
            />
            {suffix && <div className='px-3'>{suffix}</div>}
        </div>
    )
}
export default PrimaryInput;