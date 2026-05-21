
import "./Components.css"

import { FaCalendarDay } from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";

export default function  NavBar() {
    return(
        <div className="NavBarMain">

            <img src={}/>

            <div className="InfoButtons">
                <button className="InfoButton">
                    <FaCalendarDay/>
                    Calendario
                </button>
                <button className="InfoButton">
                    <FaTicket/>
                    Prenota adesso
                </button>
            </div>

        </div>

    )
}


