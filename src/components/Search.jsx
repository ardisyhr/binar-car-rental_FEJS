import Dropdown from "./Dropdown"
import Datepicker from "./Datepicker"
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Search = () => {
    const [hasFocus, setHasFocus] = useState(false);

    return (
        <>
            <div className={"fixed top-0 w-screen h-screen bg-black transition-all duration-300 "
                + (hasFocus ? "opacity-60 visible" : "opacity-0 invisible")}>
            </div>
            <div className="relative w-full h-96 mb-8 xl:mb-0 xl:h-36">
                <div className="absolute -bottom-32 xl:bottom-20 w-full">
                    <div className="flex flex-col justify-center items-start mx-auto px-16 xl:px-8 pb-20 xl:pt-6 xl:pb-8
                              bg-white w-full xl:w-fit h-fit xl:-min-h-[106px] rounded-lg shadow-md shadow-slate-300">
                        {useLocation().pathname !== "/" &&
                            <div className="text-sm font-bold mt-4 xl:mb-4 xl:mt-0">
                                Pencarianmu
                            </div>}
                        <div className="flex flex-col xl:flex-row w-full gap-1">
                            <div className="flex flex-col w-full xl:mr-4 mt-4 xl:mt-0">
                                <label className="text-xs text-neutral-4 font-['Rubik', inherit] mb-1">Tipe Driver</label>
                                <Dropdown setHasFocus={setHasFocus} options={["Dengan Sopir", "Tanpa Sopir (Lepas Kunci)"]}
                                    placeholder="Pilih Tipe Driver" iconPath="./icon_chevron-down.svg" flipIcon={true} />
                            </div>
                            <div className="flex flex-col w-full xl:mr-4 mt-4 xl:mt-0">
                                <label className="text-xs text-neutral-4 font-['Rubik', inherit] mb-1">Tanggal</label>
                                <Datepicker setHasFocus={setHasFocus} placeholder="Pilih Tanggal" />
                                {/* <Dropdown setHasFocus={setHasFocus} options={["Try calendar", "No calendar ahead", "Time for calendar"]}
                                placeholder="Pilih Tanggal" iconPath="./icon_calendar.svg" flipIcon="false"/> */}
                            </div>
                            <div className="flex flex-col w-full xl:mr-4 mt-4 xl:mt-0">
                                <label className="text-xs text-neutral-4 font-['Rubik', inherit] mb-1">Waktu Jemput/Ambil</label>
                                <Dropdown setHasFocus={setHasFocus} options={[
                                    <><span>8:00 </span><span> WIB</span></>,
                                    <><span>9:00 </span><span> WIB</span></>,
                                    <><span>10:00 </span><span> WIB</span></>,
                                    <><span>11:00 </span><span> WIB</span></>,
                                    <><span>12:00 </span><span> WIB</span></>]}
                                    placeholder="Pilih Waktu" iconPath="./icon_clock.svg" flipIcon={false} />
                            </div>
                            <div className="flex flex-col w-full xl:mr-4 mt-4 xl:mt-0">
                                <label className="text-xs text-neutral-4 font-['Rubik', inherit] mb-1">Jumlah Penumpang (optional)</label>
                                <Dropdown setHasFocus={setHasFocus} options={[
                                    <><span>2 </span><span> Orang</span></>,
                                    <><span>4 </span><span> Orang</span></>,
                                    <><span>Lebih dari 4 </span><span> Orang</span></>]}
                                    placeholder="Jumlah Penumpang" iconPath="./icon_users.svg" flipIcon={false} />
                            </div>
                            <div className="flex flex-col w-full pt-5 xl:mt-0">
                                <Link to={"car-list"}>
                                    <button type="button" className={"font-bold rounded-sm text-sm text-center items-center w-full h-10 xl:h-[36px]"
                                        + (useLocation().pathname === "/" ? " text-white bg-limegreen-4 hover:bg-limegreen-5 xl:w-[92px]"
                                            : " text-darkblue-4 bg-white hover:bg-darkblue-1 border border-darkblue-4 xl:w-[51px]")}>
                                        {useLocation().pathname === "/" ? ("Cari Mobil") : ("Edit")}
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Search;