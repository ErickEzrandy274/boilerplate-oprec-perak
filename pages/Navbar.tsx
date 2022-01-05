import React from "react";
import PerakLogo from '../assets/Perak Logo.svg';
import Image from "next/image";
import { useWindowSize } from "../utils/useWindowSize";

const Navbar = () => {
    const { width } = useWindowSize()
    
    return (
        <div className="flex md:justify-around py-3 bg-creamer justify-evenly">
            <div className="flex items-center">
                <Image src={PerakLogo} alt="Perak Logo" height={60}/>
                <h3 className="font-bold text-base sm:text-lg mx-4">PESTA RAKYAT<br/> KOMPUTER</h3>
            </div>

            <div className="flex items-center">
                {width! >= 1024 ? 
                    <>
                        <p className={`px-4 font-bold text-lg ${width! > 1200 && `px-8`}`}>Score</p>
                        <p className={`px-4 font-bold text-lg ${width! > 1200 && `px-8`}`}>Games Map</p>
                        <p className={`px-4 font-bold text-lg ${width! > 1200 && `px-8`}`}>Team Profile</p>
                        <p className={`px-4 font-bold text-lg ${width! > 1200 && `px-8`}`}>News</p>
                        <p className={`px-4 font-bold text-lg ${width! > 1200 && `px-8`}`}>Explore Cafetaria</p>
                        <p className={`px-4 font-bold text-lg ${width! > 1200 && `px-8`}`}>Merchandise</p>
                    </>
                    :
                    <>
                        <p className="font-bold text-lg px-2">Pendaftaran</p>
                    </>
                }
            </div>
        </div>
    )
}

export default Navbar