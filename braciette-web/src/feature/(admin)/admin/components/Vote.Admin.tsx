import { FaUserGroup } from "react-icons/fa6";
import { VoteProps } from "../types";

function VoteAdmin({ data, voteInfo }: VoteProps) {
  const maxValue = Math.max(...data.map((item) => item.value), 0);
  const sortedData = [...data].sort((a, b) => b.value - a.value); // comment this line to disable sorting

  return (
    <div className="h-full max-h-[50rem] xl:max-h-none flex flex-col gap-6 bg-blue p-6 rounded-2xl font-poppins text-black">
      <h2 className="w-full h-max bg-white rounded-2xl p-6 flex justify-between items-center text-2xl font-bold">
        Total Voting
        <p className="flex items-center gap-4">
          {voteInfo.totalVotes}
          <FaUserGroup size={30} className="text-text-dark" />
        </p>
      </h2>
      <div className="bg-white border border-light-gray rounded-2xl p-6 flex-grow max-h-full overflow-y-auto">
        <h2 className="text-2xl font-bold mb-5 text-center">Terfavorit</h2>
        <div className="flex flex-col gap-5 overflow-y-auto">
          {/* changed "data" to "sortedData" to enable sorting, change back to "data" to disable sorting */}
          {sortedData.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-gray"></div>
              <div className="flex-grow bg-gray h-full rounded-full">
                <div
                  className="h-full p-4 bg-blue rounded-lg transition-all duration-300"
                  // Dynamic width is set here
                  style={{ width: `${(item.value / maxValue) * 100}%` }}
                ></div>
              </div>
              <span className="font-semibold w-10 text-right">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VoteAdmin;
