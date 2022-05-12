import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Appsettings from "../../configs/appsettings";
import { format } from "date-fns";
import "./header.scss";
import { IncrementDirectionEnum, PeopleSelectionEnum } from "../common/PeopleBookingCount";

interface IProps{
  type: boolean;
}

const Header: React.FC<IProps> = ({type = true}) => {
  const [openDate, setOpenDate] = React.useState(false);
  const [date, setDate] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(new Date().getFullYear(), 9, 3),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = React.useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });


  const handleOption=(choice: PeopleSelectionEnum, operation: IncrementDirectionEnum)=>{
    setOptions((prev) =>{return {...prev, [choice] : operation === IncrementDirectionEnum.INCREASE ? options[choice] + 1 : options[choice] -1}})
  }

  return (
    <div className="header">
      <div className={`headerContainer ${!type ? 'listMode': ''}`}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type && <>
          <h1 className="headerTitle">Guaranteed discounts you can trust.</h1>
          <p className="headerDesc">
            Get rewarded for your stay - unlock instant savings of up to 10% or
            more when you check in with a free {Appsettings.appName} account.
          </p>
          <button className="headerBtn">Sign in / Register</button>
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faBed} className="headerIcon" />
              <input
                type="text"
                placeholder="Location of interest?"
                className="headerSearchInput"
              />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
              >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}</span>

              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(ranges: any) => setDate([ranges.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />
              )}
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <span className="headerSearchText" onClick={()=> setOpenOptions(!openOptions)}>
                {`${options.adult} adult - ${options.children} children - ${options.room} room`}
              </span>
              {openOptions &&
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button className="optionCounterButton" onClick={()=> handleOption(PeopleSelectionEnum.adult, IncrementDirectionEnum.DECREASE)} disabled={options.adult <= 1}>-</button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button className="optionCounterButton" onClick={()=> handleOption(PeopleSelectionEnum.adult, IncrementDirectionEnum.INCREASE)}>+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button className="optionCounterButton" onClick={()=> handleOption(PeopleSelectionEnum.children, IncrementDirectionEnum.DECREASE)} disabled={options.children <= 0}>-</button>
                    <span className="optionCounterNumber">{options.children}</span>
                    <button className="optionCounterButton" onClick={()=> handleOption(PeopleSelectionEnum.children, IncrementDirectionEnum.INCREASE)}>+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Rooms</span>
                  <div className="optionCounter">
                    <button className="optionCounterButton" onClick={()=> handleOption(PeopleSelectionEnum.room, IncrementDirectionEnum.DECREASE)} disabled={options.room <= 1}>-</button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button className="optionCounterButton" onClick={()=> handleOption(PeopleSelectionEnum.room, IncrementDirectionEnum.INCREASE)}>+</button>
                  </div>
                </div>
              </div>
              }
            </div>
            <div className="headerSearchItem">
              <button className="headerBtn">Search</button>
            </div>
          </div>
        </>}
      </div>
    </div>
  );
};

export default Header;
