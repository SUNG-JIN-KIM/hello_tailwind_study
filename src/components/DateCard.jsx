const DateCard = ({ date, todos, isSat, isHoliday }) => {
  return (
    <div className="bg-white w-40 h-52 rounded-xl">
      <div
        className={`text-2xl font-semibold text-right p-2 rounded-t-xl bg-green-400 ${
          isSat && "bg-orange-400"
        } ${isHoliday && "bg-red-400"}`}
      >
        {date}
      </div>
      <div className="text-lg p-2 flex flex-col gap-2">
        {todos.map((todo, index) => (
           <p
            key={index}
            className={`${isSat || isHoliday ? "text-red-500" : "text-black"}`} // 텍스트 빨간색
          >{todo}</p>
        ))}
      </div>
    </div>
  );
};

export default DateCard;