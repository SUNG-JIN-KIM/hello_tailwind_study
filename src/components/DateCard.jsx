const DateCard = () => {
  return (
    <div className="bg-green-50 w-40 h-52 rounded-xl">
      <div className="bg-red-400 text-2xl font-semibold text-right p-2 rounded-t-xl">
        15
      </div>
      <div className="text-lg p-2 flex flex-col gap-2">
        <p>🐅광복절</p>
        <p>🧹청소하기</p>
      </div>
    </div>
  );
};

export default DateCard;