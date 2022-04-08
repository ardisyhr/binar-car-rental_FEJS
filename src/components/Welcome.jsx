const Welcome = () => {
    return (
        <div className="flex items-end bg-darkblue-0 w-full h-full pt-24">
            <div className="flex flex-col md:flex-row justify-between w-full pl-16">
                <div className="2xl:ml-32 flex flex-col text-left md:text-left justify-center pr-16 md:pr-0 w-full md:w-1/2 mb-6">
                    <h1 className="text-3xl md:text-4xl w-full font-bold mb-4 leading-relaxed">
                        Sewa {"&"} Rental Mobil Terbaik di kawasan (Lokasimu)
                    </h1>
                    <p className="text-sm md:w-5/6">
                        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                        terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk
                        sewa mobil selama 24 jam.
                    </p>
                </div>
                <div className="flex justify-end items-end">
                    <img src="/img_car.png" alt="Car" className="w-full" />
                </div>
            </div>
        </div>
    )
}

export default Welcome;