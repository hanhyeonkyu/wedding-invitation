import React, { useState, useEffect } from "react";
import moment from "moment";
import "./CountDown.css"

function CountDown({ date }) {
    let [time, setTime] = useState({});
    useEffect(() => {
        setInterval(() => {
            let _ = s => (s.toString().length === 2 ? s : "0" + s);
            let today = moment();
            let endDate = moment(date);
            let seconds = endDate.diff(today, "seconds");
            let minutes = endDate.diff(today, "minutes");
            let hours = endDate.diff(today, "hours");
            let days = endDate.diff(today, "days");
            let months = endDate.diff(today, "months");

            setTime({
                months: _(months),
                days: _(days - months * 30),
                hours: _(hours - days * 24),
                minutes: _(minutes - hours * 60),
                seconds: _(seconds - minutes * 60)
            });
        }, 1000);
    }, [date]);
    let { months = "", days = "", hours = "", minutes = "", seconds = "" } = time;
    if (!seconds) return "";
    return (
        <div className="wrpper">
            <h3 className="days">
                {months} Months {days} Days
      </h3>
            <div className="time">
                {hours} : {minutes} : {seconds}
            </div>
        </div>
    );
}

export default CountDown;
