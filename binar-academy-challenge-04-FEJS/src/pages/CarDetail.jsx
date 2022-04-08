import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import formatIDR from "../components/FormatIDR";
import axios from "axios";

const CarDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState();
    const getCarData = async () => {
        const { data } = await axios.get(process.env.REACT_APP_BASE_API_URL + "/admin/car/" + id);
        setData(data);
    }
    useEffect(() => {
        document.title = "Detail Mobil";
        getCarData();
    }, []);
    return (
        <>
            <div className="flex flex-col xl:flex-row w-full px-16 xl:px-32 2xl:px-52 justify-center mb-0 xl:mb-6 mt-52 xl:mt-0 gap-8">
                <div className="border flex flex-col justify-start items-start bg-white 
            w-full xl:w-8/12 xl:max-w-fit min-h-fit rounded-lg shadow-sm shadow-slate-300 p-8">
                    <div className="w-full pr-16">
                        <h1 className="text-sm font-bold mt-4 xl:mt-0">Tentang Paket</h1>
                        <h2 className="text-sm mt-4">Include</h2>
                        <ul className="text-sm leading-[24.5px] list-disc pl-4 text-neutral-3 mt-2">
                            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                            <li>Sudah termasuk bensin selama 12 jam</li>
                            <li>Sudah termasuk Tiket Wisata</li>
                            <li>Sudah termasuk pajak</li>
                        </ul>
                        <h2 className="text-sm mt-4">Exclude</h2>
                        <ul className="text-sm leading-[24.5px] list-disc pl-4 text-neutral-3 mt-2">
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                        <h1 className="text-sm font-bold mt-4">Refund, Reschedule, Overtime</h1>
                        <ul className="text-sm leading-[24.5px] list-disc pl-4 text-neutral-3 mt-2">
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                    </div>
                </div>
                <div className="border flex flex-col justify-start items-center bg-white 
            w-full xl:w-fit xl:max-w-fit md:w-fit min-h-fit h-fit rounded-lg shadow-sm shadow-slate-300 p-6">
                    <img src={data?.image} alt="Car Preview" className="w-[270px] mx-8" />
                    <div className="flex flex-col justify-start items-start text-base text-left w-full">
                        <h2 className="mt-8 text-sm font-bold">{data?.name}</h2>
                        <div className="flex flex-col gap-2 text-sm font-light mt-2">
                            <div className="flex flex-row gap-2 items-center text-neutral-3 text-[10px] leading-[14px]">
                                <img src="/icon_users.svg" alt="" className="w-[12px]" />
                                <div className="mr-4">
                                    4 Orang
                                </div>
                                <img src="/icon_gear.svg" alt="" className="w-[18px]" />
                                <div className="mr-4">
                                    Manual
                                </div>
                                <img src="/icon_calendar.svg" alt="" />
                                <div className="mr-4">
                                    Tahun 2020
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-between items-center mt-12">
                            <h2 className="text-sm">Total</h2>
                            <h1 className="text-sm font-bold">{formatIDR(data?.price)} / hari</h1>
                        </div>
                        <div className="flex flex-col w-full mt-6">
                            <button type="button" className="text-white bg-limegreen-4 hover:bg-limegreen-5 
                            font-bold rounded-sm text-sm text-center items-center w-full h-10 md:h-[36px]">
                                Lanjutkan Pembayaran
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden xl:flex xl:flex-col items-center w-full mb-8">
                <button type="button" className="text-white bg-limegreen-4 hover:bg-limegreen-5 
                            font-bold rounded-sm text-sm text-center items-center w-44 h-10 md:h-[36px]">
                    Lanjutkan Pembayaran
                </button>
            </div>
        </>
    )
}
export default CarDetail;