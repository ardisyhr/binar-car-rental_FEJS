const Footer = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center 
        gap-10 md:gap-20 h-fit text-left md:text-left text-sm px-16 pt-16 pb-16 mt-32 xl:mt-0">
            <ul>
                <li className="mb-4">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</li>
                <li className="mb-4">binarcarrental@gmail.com</li>
                <li className="mb-4">081-233-334-808</li>
            </ul>
            <ul>
                <li className="mb-4">Our Services</li>
                <li className="mb-4">Why Us</li>
                <li className="mb-4">Testimonial</li>
                <li className="mb-4">FAQ</li>
            </ul>
            <ul>
                <li className="mb-4">Connect with us</li>
                <li className="mb-4">
                    <div className="flex justify-start gap-4">
                        <img src="./icon_facebook.svg" alt="" />
                        <img src="./icon_instagram.svg" alt="" />
                        <img src="./icon_twitter.svg" alt="" />
                        <img src="./icon_mail.svg" alt="" />
                        <img src="./icon_twitch.svg" alt="" />
                    </div>
                </li>
            </ul>
            <ul>
                <li className="mb-4">Copyright Binar 2022</li>
                <li className="mb-4">
                    <a href="/" className="flex justify-start items-center">
                        <img src="./logo.png" alt="Placeholder Logo" />
                    </a>
                </li>
            </ul>

        </div>
    )
}

export default Footer;