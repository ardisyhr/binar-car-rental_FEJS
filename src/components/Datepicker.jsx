import { useState } from "react"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';

const Datepicker = (props) => {
    const [isSelected, setIsSelected] = useState(false);
    const [selectedDate, setSelectedDate] = useState();
    const [isNavigatingCalendar, setisNavigatingCalendar] = useState(false);
    const [hasClickedDate, setHasClickedDate] = useState(false);
    const [tempDate, setTempDate] = useState();

    const handleDateSelection = (e) => {
        const date = new Date(e.toISOString());
        const options = {
            year: 'numeric', month: 'short', day: 'numeric'
        };
        const formattedDate = date.toLocaleString('en-GB', options);
        setHasClickedDate(true);
        setTempDate(formattedDate);
        changeView();
    }
    const handleUnfocus = () => {
        setTimeout(() => {
            if (!isNavigatingCalendar) {
                setIsSelected(false);
                props.setHasFocus(false);
            }
        }, 100);
    }
    const handleFocus = () => {
        setTimeout(() => {
            setIsSelected(true);
            props.setHasFocus(true);
        }, 100);
    }
    const changeView = () => {
        setTimeout(() => {
            setisNavigatingCalendar(true);
            document.getElementById("dateButton").focus();
        }, 0);
        setTimeout(() => {
            setisNavigatingCalendar(false);
        }, 200);
    }
    return (
        <>
            <div className="flex items-center justify-between">
                <div className=" relative inline-block text-left dropdown w-full xl:w-52">
                    <button
                        style={{ lineHeight: "18px" }}
                        id="dateButton"
                        className={"inline-flex justify-between items-center w-full h-10 xl:h-fit px-4 py-2 text-xs text-neutral-4 bg-white rounded-sm hover:text-gray-500 focus:border-limegreen-4 border"
                            + (selectedDate !== undefined ? " border-neutral-5" : " border-gray-300")}
                        type="button"
                        onFocus={handleFocus} onBlur={handleUnfocus}>
                        <div className="text-neutral-3">
                            {selectedDate === undefined ? props.placeholder : selectedDate}
                        </div>
                        <img src="./icon_calendar.svg" alt="" className={"transition-transform duration-300 " +
                            (isSelected && props.flipIcon === true ? "-scale-y-100" : "scale-y-100")} />
                    </button>
                    <div className="relative z-50">
                        <div className={"transition-all duration-300 z-50"
                            + (isSelected ? "opacity-1 visible scale-y-100" : " opacity-0 invisible scale-y-0")}>
                            <div className="absolute z-50 w-72 h-96">
                                <div className="flex flex-col justify-center h-full">
                                    <Calendar onClickDay={handleDateSelection} minDate={new Date()}
                                        showNeighboringMonth={false}
                                        formatShortWeekday={(locale, date) => date.toLocaleString(locale, { weekday: 'narrow' })}
                                        onClickMonth={changeView}
                                        onClickYear={changeView}
                                        onClickDecade={changeView}
                                        onDrillUp={changeView}
                                        onDrillDown={changeView}
                                        calendarType="US" next2Label={null} prev2Label={null} nextLabel={null} prevLabel={null} />
                                    <button onClick={() => { setSelectedDate(tempDate) }} type="button"
                                        className={"font-bold rounded-sm mx-auto text-sm text-center w-4/5 h-[36px] text-white -translate-y-14 "
                                            + (hasClickedDate ? "bg-limegreen-4 hover:bg-limegreen-5" : "bg-limegreen-1")} >
                                        Pilih Tanggal
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Datepicker;