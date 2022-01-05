import React from "react";
import { useWindowSize } from "../utils/useWindowSize";
import Button from "./Button";

const Modal = ({ isConfirm, setIsConfirm }: { isConfirm: boolean, setIsConfirm: Function }) => {
    const { width } = useWindowSize()
    
    return (
        isConfirm ?
            <div className="modal-container absolute w-screen top-0 left-0">
                <div className="absolute sm:top-1/2 top-1/4 sm:left-1/4 left-1/5 sm:w-1/2 w-3/5 py-8 bg-darkYellow rounded-md border-2 border-black p-3 z-20">
                    <div className="first-title text-center font-bold text-lightBlue text-3xl md:text-4xl tracking-wide">
                        <h3>Apakah Anda Yakin Ingin</h3>
                        <h3>Mendaftar di Permainan Ini?</h3>
                    </div>

                    <div className="text-center font-bold sm:mx-20 mx-6 my-5">
                        <p>Pastikan semua data yang telah anda masukkan tidak ada yang salah.
                            Anda tidak bisa mengubah data setelah pendaftaran tersimpan.
                        </p>
                    </div>

                    <div className={`flex ${width! < 768 && `flex-col justify-center items-center`}  justify-evenly`}>
                        <div className="flex border-4 border-black rounded-lg md:mx-5 md:my-0 my-1 z-10 h-12 md:w-2/3 w-19/20 cursor-pointer bg-pink"
                            onClick={() => setIsConfirm(false)}
                        >
                            <div className="m-1 mx-auto rounded-lg h-8 w-31/32 bg-darkRed p-1 text-center">
                                <Button text="Batal" />
                            </div>
                        </div>

                        <div className="flex border-4 border-black rounded-lg md:mx-5 md:my-0 my-1 z-10 h-12 md:w-2/3 w-19/20 cursor-pointer bg-lightGreen">
                            <div className="m-1 mx-auto rounded-lg h-8 w-31/32 bg-bayam p-1 text-center">
                                <Button text="Simpan" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            :
            null
    )
}

export default Modal