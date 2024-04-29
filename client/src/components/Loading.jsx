export default function Loading() {
  return (
    <div className="w-full flex items-center gap-4 flex-wrap">
      {Array(10)
        .fill()
        .map((item,i) => (
          <div key={i} className="flex flex-col gap-4 w-52">
            <div className="skeleton h-32 w-full"></div>
            <div className="flex gap-4 items-center">
              <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
              <div className="flex flex-col gap-4">
                <div className="skeleton h-4 w-20"></div>
                <div className="skeleton h-4 w-28"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
