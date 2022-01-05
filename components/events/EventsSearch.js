import { useRef } from "react";
import Button from "../ui/Button";

const EventsSearch = (props) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;
    props.onSearch(selectedYear, selectedMonth);
  };

  return (
    <form className="form my-8 mx-auto shadow p-4 bg-white rounded-md w-11/12 max-w-2xl flex justify-between flex-col gap-4 md:flex-row" onSubmit={submitHandler}>
      <div className="controls w-full flex gap-4 flex-col md:w-10/12 md:flex-row">
        <div className="control flex flex-1 gap-4 items-center justify-between">
          <label htmlFor="year" className="font-bold">Year</label>
          <select id="year" className="bg-white rounded-md w-9/12 p-1 md:w-full" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className="control flex flex-1 gap-4 items-center justify-between">
          <label htmlFor="month" className="font-bold">Month</label>
          <select id="month" className="bg-white rounded-md w-9/12 p-1" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <div className="center w-40">
        <Button>
          Find Events
        </Button>
      </div>
    </form>
  );
};

export default EventsSearch;
