import { useState } from "react"

const Dropdown = (props) => {
    const [isSelected, setIsSelected] = useState(false);
    const [currentValue, setCurrentValue] = useState();
    const handleSelection = (e, value) => {
        e.preventDefault();
        setCurrentValue(value);
    }
    const handleFocus = (focus) => {
        setTimeout(() => {
            setIsSelected(focus);
            props.setHasFocus(focus);
        }, 100);
    }
    return (
        <>
            <div className="flex items-center justify-between">
                <div className=" relative inline-block text-left dropdown w-full xl:w-52">
                    <button
                        style={{ lineHeight: "18px" }}
                        className={"z-0 inline-flex justify-between items-center w-full h-10 xl:h-fit px-4 py-2 text-xs text-neutral-4 bg-white rounded-sm hover:text-gray-500 focus:border-limegreen-4 border" + (currentValue !== undefined ? " border-neutral-5" : " border-gray-300")}
                        type="button"
                        onFocus={() => handleFocus(true)} onBlur={() => handleFocus(false)}>
                        <div className="text-neutral-3">
                            {currentValue === undefined ? props.placeholder : currentValue}
                        </div>
                        <img src={props.iconPath} alt="" className={"transition-transform duration-300 " +
                            (isSelected && props.flipIcon === true ? "-scale-y-100" : "scale-y-100")} />
                    </button>
                    <div className="relative z-50">
                        <div className={"transition-all duration-300 z-50"
                            + (isSelected ? "opacity-1 visible scale-y-100" : " opacity-0 invisible scale-y-0")}>
                            <div className="absolute z-50 right-0 w-full origin-top-left bg-white border border-gray-200 shadow-lg outline-none">
                                {props.options.map((option) =>
                                    <a href="/" onClick={(e) => { handleSelection(e, { option }.option) }} className="text-xs text-neutral-4 font-['Rubik'] 
                                bg-white hover:bg-limegreen-2 hover:text-limegreen-4 hover:font-medium 
                                flex justify-between w-full px-4 py-2 text-left" role="menuitem">{option}</a>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dropdown;