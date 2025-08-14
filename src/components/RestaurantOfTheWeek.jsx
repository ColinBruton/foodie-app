export default function RestaurantOfTheWeek() {
  return (
    <div className="w-1/2 bg-[rgb(213,204,194)] rounded-3xl mx-auto h-[80%] flex flex-col items-center justify-center p-12 shadow-lg">
      <h2 className="text-[36px] md:text-[48px] font-bold text-[rgb(199,93,44)] mb-6 text-center leading-tight">
        Restaurant of the Week
      </h2>
      <p className="text-[20px] md:text-[28px] text-center text-[rgb(199,93,44)] leading-relaxed">
        Check out Knoxville's featured spot this week:{" "}
        <span className="font-bold text-[22px] md:text-[30px]">Stock and Barrel</span>
      </p>
    </div>
  );
}


