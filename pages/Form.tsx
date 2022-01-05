import React, { useState } from "react";
import { useWindowSize } from "../utils/useWindowSize";
import Button from "./Button";
import Image from "next/image";
import bannerTemplate from '../assets/bannerTemplate.svg';
import Modal from "./Modal";

const Form = ({ text, img }: { text: string, img: StaticImageData }) => {
    const { width } = useWindowSize()
    const [role, setRole] = useState<string>('')
    const [fullName, setFullName] = useState<string>('')
    const [nickName, setNickName] = useState<string>('')
    const [NPM, setNPM] = useState<string>('')
    const [sosmed, setSosmed] = useState<string>('')
    const [isConfirm, setIsConfirm] = useState<boolean>(true)

    const handleDaftar = () => {
        setIsConfirm(true)
    }
    
    return (
        <div>
            <div className={`${width! > 1024 ? `hidden` : `flex`}`}>
                <div className="mx-auto w-2/3">
                    <Image src={bannerTemplate} alt="bannerTemplate" />
                    <div
                        className={`absolute inset-y-1/3 -translate-y-1/2
                            ${width! < 400 ? `${width! < 375 ? `translate-x-10` : `translate-x-1/2`}` : `translate-x-1/3 `}`
                        }
                    >
                        <Image src={img} alt={`${text} logo`} width={`${width! < 400 ? 130 : width! < 500 ? 150 : 200}`} />
                    </div>
                </div>

            </div>
            
            <div className="md:mx-10 mx-4">
                <p className="first-title font-black lg:text-4xl text-3xl leading-8 text-lightBlue pt-5 lg:p-16 lg:pb-2 p-4 text-stroke-black z-10">
                    Pendaftaran Games Individual
                </p>
            </div>

            <div className="lg:flex">
                <div className="lg:w-1/2 md:mx-10 mx-4">
                    <div className="text-white md:py-8 md:pt-0 lg:px-16 p-4 text-2xl leading-8 tracking-wider">
                        <p className="z-10 font-bold first-title">{text}</p>
                    </div>

                    <div className="md:py-8 md:pt-0 lg:px-16 p-4 lg:text-2xl sm:text-xl text-lg leading-8 tracking-wider">
                        <h3 className="z-10 font-bold">Biaya pendaftaran : Rp xx.xxx</h3>
                        <p className="text-base">Instruksi pembayaran diberikan setelah mengisi form pendaftaran</p>
                    </div>

                    <form className="lg:pl-16">
                        <div className={`flex lg:items-center ${width! < 1024 && `flex-col`}`}>
                            <div className="flex my-2">
                                <input type="radio" id="elemen" value="elemen" name="radio"
                                    className="mx-2 w-7 h-7 form-radio outline-none focus:bg-black bg-green"
                                    checked={role === "elemen"}
                                    onChange={(e) => setRole(e.target.value)}
                                />
                                <label htmlFor="elemen" className="lg:mx-5 mx-2 text-lg leading-6 font-semibold lg:mr-20">Elemen Staf / Dosen</label>
                            </div>
                            
                            <div className="flex my-2">
                                <input type="radio" id="mahasiswa" value="mahasiswa" name="radio"
                                    className="mx-2 w-7 h-7 form-radio"
                                    onChange={(e) => setRole(e.target.value)}
                                    checked={role === "mahasiswa"}
                                />
                                <label htmlFor="mahasiswa" className="lg:mx-5 mx-2 text-lg leading-6 font-semibold lg:mr-20">Mahasiswa</label>
                            </div>
                        </div>

                        <div className="pl-4 md:my-10 my-6 mt-4">
                            <h3 className="font-semibold my-2 text-lg">Nama Lengkap</h3>
                            <input type="text"
                                className="rounded-md outline outline-2 p-1 w-2/3 sm:w-11/12 lg:w-full"
                                onChange={(e) => setFullName(e.target.value)}
                                value={fullName}
                            />
                        </div>

                        <div className="pl-4 md:my-10 my-6">
                            <h3 className="font-semibold my-2 text-lg">Nama Panggilan</h3>
                            <input type="text"
                                className="rounded-md outline outline-2 p-1 w-2/3 sm:w-11/12 lg:w-full"
                                value={nickName}
                                onChange={(e) => setNickName(e.target.value)}
                            />
                        </div>

                        <div className="pl-4 md:my-10 my-6">
                            <h3 className="font-semibold text-lg">Profile Picture</h3>
                            <div>
                                <div className="lg:flex">
                                    <div className={`border-4 border-black rounded-lg z-10 ${width! < 768 ? `my-6` : `my-4`} md:h-48 md:w-52 w-40 h-36 bg-purple-600`}>
                                        <div className="m-3 rounded-lg md:h-40 md:w-44 w-32 h-28 bg-purple-900 p-2">
                                            
                                        </div>
                                    </div>

                                    <div className={`flex flex-col justify-end ml-8 my-4 w-full ${width! < 1024 && `hidden`}`}>
                                        <p className="font-semibold my-4">Pilih Gambar</p>
                                        <input type="text" className="p-2 rounded-md outline outline-2 w-11/12 lg:w-full" />
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className={`border-4 border-black rounded-lg z-10 lg:my-4 h-12 w-1/3 lg:w-52 bg-creamer`}>
                                        <div className="flex m-1 border-2 border-black rounded-lg h-8 w-inherit bg-brown">
                                            <label htmlFor="profile"
                                                className={`font-semibold absolute sm:translate-x-12 translate-x-5 ${width! < 420 && `translate-x-2`}`} >
                                                {width! < 1024 ? `Pilih Gambar` : `Upload File`}
                                            </label>
                                            <input type="file"
                                                id="profile" name="profile"
                                                accept="image/png, image/jpeg, image/jpg"
                                                value=""
                                                className="opacity-0 w-inherit" />
                                        </div>
                                    </div>

                                    <div className={`flex flex-col justify-center ml-4 w-1/3 sm:w-full ${width! > 1024 && `hidden`}`}>
                                        <input type="text" className="p-2 rounded-md outline outline-2 w-11/12 lg:w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pl-4 md:my-10 my-6">
                            <h3 className="font-semibold my-2 text-lg">NPM</h3>
                            <input type="number"
                                maxLength={10}
                                value={NPM}
                                className="rounded-md outline outline-2 p-1 w-2/3 sm:w-11/12 lg:w-full"
                                onChange={(e) => setNPM(e.target.value)}
                            />
                        </div>

                        <div className="pl-4 md:my-10 my-6">
                            <h3 className="font-semibold my-2 text-lg">ID Line / WhatsApp</h3>
                            <input type="text"
                                value={sosmed}
                                className="rounded-md outline outline-2 p-1 px-2 w-2/3 sm:w-11/12 lg:w-full"
                                onChange={(e) => setSosmed(e.target.value)}
                            />
                        </div>

                        <div className="pl-4 md:my-10 my-6" onClick={handleDaftar}>
                            <div className="flex border-4 border-black rounded-lg lg:mx-auto z-10 h-12 w-2/3 sm:w-11/12 lg:w-full cursor-pointer bg-lightGreen">
                                <div className="m-1 mx-auto rounded-lg h-8 w-31/32 bg-bayam p-1 text-center">
                                    <Button text="Daftar Sekarang" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className={`mx-10 ${width! < 1024 && `hidden`}`}>
                    <div>
                        <Image src={bannerTemplate} alt="bannerTemplate" width={400} height={400} />
                        <div className=" -translate-y-72 translate-x-12">
                            <Image src={img} alt="brawlhalla logo" height={200} width={300} />
                        </div>
                    </div>

                </div>
            </div>

            <Modal isConfirm={isConfirm} setIsConfirm={setIsConfirm}/>

        </div>
    )
}

export default Form