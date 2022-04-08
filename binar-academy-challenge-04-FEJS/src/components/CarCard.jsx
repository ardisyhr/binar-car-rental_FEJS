import { Link } from "react-router-dom";
import formatIDR from "./FormatIDR";

const CarCard = ({ data }) => {
    return (
        <div className="border flex flex-col justify-center items-center bg-white 
            w-full md:w-80 min-h-fit rounded-lg shadow-sm shadow-slate-300 p-6">
            <img src={data.image} alt="Car Preview" className="w-[270px] h-[160px]" />
            <div className="text-base text-left">
                <h2 className="mt-8">{data.name}</h2>
                <h1 className="font-bold mt-2">{formatIDR(data.price)} / hari</h1>
                <p className="text-sm mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex flex-col gap-2 text-sm font-light mt-2">
                    <div className="flex items-center gap-2">
                        <img src="./icon_users.svg" alt="" />
                        4 Orang
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="./icon_gear.svg" alt="" className="w-[18px]" />
                        Manual
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="./icon_calendar.svg" alt="" />
                        Tahun 2020
                    </div>
                </div>
                <div className="flex flex-col w-full mt-6">
                    {/* <Link to={{
                        pathname: `${data.id}`,
                        query: {
                            image: data.image,
                            name: data.name,
                            price: data.price
                        }
                        }}> */}
                    <Link to={`car/${data.id}`}>
                        <button type="button" className="text-white bg-limegreen-4 hover:bg-limegreen-5 
                            font-bold rounded-sm text-sm text-center items-center w-full h-10 md:h-[36px]">
                            Pilih Mobil
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default CarCard;