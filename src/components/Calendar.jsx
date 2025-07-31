import DateCard from "./DateCard";
import scheduleList from "../scheduleList.json";

const Calendar = () => {
  return (
    <div className="bg-blue-400 rounded-2xl shadow p-12">
      <h1 className="bg-white mb-6 text-right font-bold text-4xl p-4 rounded-2xl">
        August, 2025
      </h1>
      <div className="grid grid-cols-7 justify-items-center gap-6">
        {scheduleList.map((value) => (
          <DateCard key={value.date} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;