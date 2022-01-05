import React, { useState } from "react";
import Image from "next/image";
import brawlLogo from '../assets/brawlLogo.svg';
import chessLogo from '../assets/chessLogo.svg';
import osuLogo from '../assets/osuLogo.svg';
import LeftCloud from '../assets/LeftCloud.svg';
import VeryLeftCloud from '../assets/VeryLeftCloud.svg';
import RightCloud from '../assets/RightCloud.svg';
import BlueCube from '../assets/BlueCube.svg';
import YellowCube from '../assets/YellowCube.svg';
import { useWindowSize } from "../utils/useWindowSize";
import Form from "./Form";

const Body = () => {
    const { width } = useWindowSize()
    const [form, setForm] = useState(false)
    const [text, setText] = useState('')
    const [img, setImg] = useState<StaticImageData>(brawlLogo)

    const handleClick = (title:string, img:StaticImageData) => {
        setText(title)
        setImg(img)
        setForm(true)
    }
    
    return (
        <div>
            {form ?
                <Form text={text} img={img}/>
                :
                <>
                    <div className="flex flex-col justify-between">
                        <p className="first-title font-black text-6xl my-auto leading-10 text-lightBlue md:pt-10 md:pb-2 pb-4 md:px-16 pt-12 px-10 z-10">
                            Pilih games yang 
                        </p>
                        <p className="first-title font-black text-6xl my-auto leading-10 text-lightBlue md:pt-2 md:px-16 pb-10 px-10 z-10">
                            kamu inginkan
                        </p>
                        {/* <Image src={BlueCube} alt="blue cube" height={300} className={`translate-x-5 ${width! < 768 && `translate-x-16 scale-125`}`} /> */}
                    </div>

                    <div className="first-title text-white md:py-8 md:pt-0 md:px-16 md:p-10 p-5 pb-6 text-4xl leading-8 tracking-wider">
                        <p className="z-10 font-bold">Games Individual</p>
                    </div>

                    <div className={`flex md:my-8 my-3 ${width! < 600 && `flex-col justify-center items-center`}`}>
                       
                        <div className="border-4 border-black rounded-lg md:ml-16 mx-2 md:mx-0 z-10 h-48 w-52 cursor-pointer bg-green"
                            onClick={() => handleClick('Brawlhalla', brawlLogo)}
                        >
                            <div className="m-3 rounded-lg md:h-40 md:w-44 bg-bayam p-5">
                                <Image src={brawlLogo} alt="Brawlhalla Logo" height={150} width={180} />
                            </div>
                        </div>

                        <div className={`border-4 border-black rounded-lg md:mx-10 ${width! < 1024 && `my-6`} mx-auto z-10 h-48 w-52 bg-purple-600 cursor-pointer`}
                            onClick={() => handleClick('Osu!', osuLogo)}
                        >
                            <div className="m-3 rounded-lg md:h-40 md:w-44 bg-purple-900 p-2">
                                <Image src={osuLogo} alt="Osu! Logo" height={180} />
                            </div>
                        </div>
                        

                        <div className={`border-4 border-black rounded-lg h-48 w-52 z-10 md:mx-0 mx-2 bg-purple-600 cursor-pointer`}
                            onClick={() => handleClick('Chess', chessLogo)}
                        >
                            <div className="m-3 rounded-lg md:h-40 md:w-44 bg-purple-900 p-5">
                                <Image src={chessLogo} alt="Chess Logo" height={150} />
                            </div>
                        </div>

                    </div>
                </>
            }

            {/* <div className={`absolute right-32 scale-75 top-32 translate-y-4 ${form && `hidden`}`}>
                <Image src={RedCube} alt="red cube" />
            </div>

            <div className="flex">
                <Image src={VeryLeftCloud} alt="very left cloud" width={500} />
                <Image src={LeftCloud} alt="left cloud" width={1200} className=""/>
                <Image src={RightCloud} alt="right cloud" />
            </div> */}
        </div>
    )
} 

export default Body