import DateCard from "./DateCard";
import scheduleList from "../scheduleList.json";

const Calendar = () => {
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <div className="bg-blue-300 rounded-2xl shadow p-12 my-20">
      <h1 className="bg-white mb-6 text-right font-bold text-4xl p-4 rounded-2xl">
        August, 2025
      </h1>
      <div className="grid grid-cols-7 justify-items-center gap-6">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="w-40 h-16 flex items-center justify-center font-bold text-lg">
            {day}
          </div>
        ))}
        <div className="w-40 h-52"></div>
        <div className="w-40 h-52"></div>
        <div className="w-40 h-52"></div>
        <div className="w-40 h-52"></div>
        <div className="w-40 h-52"></div>
        {scheduleList.map((value) => (
           <DateCard
            key={value.date}
            date={value.date}
            todos={value.todos}
            isSat={value.isSat}
            isHoliday={value.isHoliday}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;