import React, { useState, useEffect } from "react";
import moment from "moment";
import "./CountDown.css";

function CountDown2() {
  let [time, setTime] = useState({});
  useEffect(() => {
    setInterval(() => {
      let _ = (s) => (s.toString().length === 2 ? s : "0" + s);
      let today = moment();
      let endDate = moment("2021-10-24 12:10");
      let dateToday = new Date();
      let dateEndDate = new Date("2021-10-24T12:10:00");
      const { year, month, date } = get_date_diff(dateToday, dateEndDate);
      let seconds = today.diff(endDate, "seconds");
      let minutes = today.diff(endDate, "minutes");
      let hours = today.diff(endDate, "hours");
      let days = today.diff(endDate, "days");
      // let months = today.diff(endDate, "months");

      setTime({
        years: _(year),
        months: _(month),
        days: _(date),
        hours: _(hours - days * 24),
        minutes: _(minutes - hours * 60),
        seconds: _(seconds - minutes * 60),
      });
    }, 1000);
  }, []);
  let {
    years = "",
    months = "",
    days = "",
    hours = "",
    minutes = "",
    seconds = "",
  } = time;
  if (!seconds) return "";
  return (
    <div className="wrpper">
      <h3 className="days">
        {years} Years {months} Months {days} Days
      </h3>
      <div className="time">
        {hours} : {minutes} : {seconds}
      </div>
    </div>
  );
}

// date 차이 계산모듈
export const get_date_diff = (x, y) => {
  x = _To_date(x);
  y = _To_date(y);
  let ret = {
    year: x.getFullYear() - y.getFullYear(),
    month: x.getMonth() - y.getMonth(),
    date: x.getDate() - y.getDate(),
  };
  if (ret.date < 0) {
    let last = last_date(y.getFullYear(), y.getMonth());

    --ret.month;
    ret.date = x.getDate() + (last - y.getDate());
  }
  if (ret.month < 0) {
    --ret.year;
    ret.month = 12 + ret.month;
  }
  return ret;
};
function _To_date(date) {
  if (date instanceof Date) return date;
  else return new Date(date);
}
function last_date(year, month) {
  if (month === 1 && year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0))
    return 29;
  else return LAST_DATES[month];
}
const LAST_DATES = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export default CountDown2;
