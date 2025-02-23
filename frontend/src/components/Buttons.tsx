import { ElementProps } from "@react-three/fiber";
import { motion } from "motion/react"
import { ReactElement, JSX } from "react";

interface IconTwoTextProps {
    icon: string;
    textOne: string;
    textTwo: string;
    extra: string | null;
  }


export const BtnWrap = ({children, ...props}: any) =>       
    <motion.div 
        initial={{scale: 0.9}}
        whileTap={{scale: 0.95}}
        whileHover={{scale: 1}}
        {...props}
    >
        {children}
    </motion.div>
  
export const IconTwoText = ({icon, textOne, textTwo, extra, ...props} : IconTwoTextProps & JSX.IntrinsicElements['div']) => {
  
    return (
      <BtnWrap
        className={`flex justify-center items-center gap-3 px-6 py-2.5 bg-slate-900 text-white rounded-3xl cursor-pointer ` + extra}
        {...props}
      >
        <div className="icon h-[20px] w-[20px] rounded-full">
          <img src={icon} className="object-contain h-full w-full" />
        </div>
        <div className="text flex flex-col">
          <span className='text-xs leading-none'>{textOne}</span>
          <span className='font-bold text-xl leading-none'>{textTwo}</span>
        </div>
      </BtnWrap>
    );
}

interface IconTextSmProps {
    icon: ReactElement;
    text: string;
}


export const IconTextSm = ({ icon, text, ...props } : IconTextSmProps & JSX.IntrinsicElements['div']) => {
    return (
        <BtnWrap
            className="flex items-center space-x-1.5 bg-blue-500 text-white px-4 py-1 rounded-full scale-90 max-[1062px]:w-[150px] justify-center cursor-pointer"
            {...props}
        >
            <div className="icon">{icon}</div>
            <div className="name">{text}</div>
        </BtnWrap>
    )
}

export const TextIconSm = ({ text, icon, ...props } : IconTextSmProps & JSX.IntrinsicElements['div']) => {
    return (
        <BtnWrap
            className="bg-blue-500 text-white rounded-3xl flex items-center gap-1.5 px-4 py-1.5 scale-[0.85] cursor-pointer"
            {...props}
        >
            <div className="font-medium">
              {text} 
            </div>
            <div className="flex items-center justify-center">
              {icon}
            </div>
        </BtnWrap>
    )
}