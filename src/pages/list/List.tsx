import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import HelmetTag from "../../components/common/HelmetTag";
import SearchItem from "../../components/searchItem/SearchItem";
import UtilityHelper from "../../configs/utils";
import "./list.scss";

export interface IState {
  destination: string;
  date: [{ startDate: Date; endDate: Date }];
  options: {
    adult: number;
    children: number;
    room: number;
  };
}

const List = () => {
  const location = useLocation();
  let state = location.state as IState;
  state = state ?? {
    destination: '',
    options: { adult: 1, children: 0, room: 1 },
    date: [{ startDate: Date.now(), endDate: Date.now() }],
  };
  const [destination, setDestination] = useState(state.destination);
  const [date, setDate] = useState(state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(state.options);

  React.useEffect(() => {    
    UtilityHelper.functions.geolocate()
    .then((data)=>
    { debugger;
      setDestination(`${data.longitude} - ${data.latitude}`)}).catch((err)=>console.log(err));
  }, []);

  return (
    <div className="listContainer">
      <HelmetTag title={`${destination} apartments result.`} />
      <div className="listWrapper">
        <div className="listSearch">
          <h2 className="listTitle">Search</h2>
          <div className="listItem">
            <label htmlFor="destination">Destination</label>
            <input type="text" placeholder={destination} />
          </div>
          <div className="listItem">
            <label htmlFor="check-in-date">Check-in date</label>
            {/* <span>{`${format(stateOptions.date[0].startDate, "MM/dd/yyyy")} to ${format(stateOptions.date[0].endDate, "MM/dd/yyyy")}`}</span> */}
            {/* <DateRange
                    editableDateInputs={true}
                    onChange={(ranges: any) => setStateOptions({...stateOptions,  date:[ranges.selection]})}
                    minDate= {new Date()}
                    ranges={stateOptions.date}
                  /> */}
            <span onClick={() => setOpenDate(!openDate)}>{`${format(
              date[0].startDate,
              "MM/dd/yyyy"
            )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {openDate && (
              <DateRange
                onChange={(item: any) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />
            )}
          </div>
          <div className="listItem">
            <label htmlFor="options">Options</label>
            <div className="listOptions">
              <div className="listOptionItem">
                <div className="lsOptionText">
                  Min price <small>per night</small>
                </div>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="listOptionItem">
                <div className="lsOptionText">
                  Max price <small>per night</small>
                </div>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="listOptionItem">
                <div className="lsOptionText">Adult </div>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={`${options.adult}`}
                />
              </div>
              <div className="listOptionItem">
                <div className="lsOptionText">Children </div>
                <input
                  type="number"
                  min={0}
                  className="lsOptionInput"
                  placeholder={`${options.children}`}
                />
              </div>
              <div className="listOptionItem">
                <div className="lsOptionText">Room </div>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={`${options.room}`}
                />
              </div>
            </div>
          </div>
          <button>Search</button>
        </div>
        <div className="listResult">
          <SearchItem />
        </div>
      </div>
    </div>
  );
};

export default List;
