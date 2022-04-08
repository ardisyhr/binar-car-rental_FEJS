import { useState, useEffect } from "react";
import axios from "axios";
import CarCard from "../components/CarCard";

const CarList = () => {
    const [carList, setCarList] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const getCarData = async () => {
        setisLoading(true);
        const { data } = await axios.get(process.env.REACT_APP_BASE_API_URL + "/admin/car");
        setisLoading(false);

        setCarList(data);
    }
    const handleCarList = () => {
        return (
            <>
                {!isLoading ? carList?.map((car) => {
                    return (
                        <div>
                            <CarCard data={car} />
                        </div>)
                })
                    : <>
                        <div className="flex justify-center w-full col-span-3">
                            <img src="./icon_spinner.svg" alt="Loading" className="animate-spin w-10 h-10" />
                        </div>
                    </>
                }
            </>
        )
    }
    useEffect(() => {
        document.title = "Hasil Pencarian";
        getCarData();
    }, []);
    return (
        <div className="w-full px-16 justify-center flex mb-16 mt-52 xl:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {handleCarList()}
            </div>
        </div>
    )

}

export default CarList;