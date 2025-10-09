import Image from "next/image";
import { FaUserGroup } from "react-icons/fa6";
import { VoteAdminProps } from "../types";

function VoteAdmin({ data, voteInfo }: VoteAdminProps) {
  const maxValue = Math.max(...data.map((item) => item.value), 1);
  const sortedData = [...data].sort((a, b) => b.value - a.value);

  return (
    <div className="h-full flex flex-col gap-6 bg-blue p-6 rounded-2xl font-poppins text-black">
      <h2 className="w-full h-max bg-white rounded-2xl p-6 flex justify-between items-center text-2xl font-bold flex-shrink-0">
        Total Voting
        <p className="flex items-center gap-4">
          {voteInfo.totalVotes}
          <FaUserGroup size={30} className="text-text-dark" />
        </p>
      </h2>
      <div className="bg-white border border-light-gray rounded-2xl p-6 flex-grow overflow-y-auto min-h-0">
        <h2 className="text-2xl font-bold mb-5 text-center">Terfavorit</h2>
        <div className="flex flex-col gap-5">
          {sortedData.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <div className="relative w-9 h-9 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                <Image
                  src={item.logoUrl}
                  alt={item.label}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <span className="font-semibold text-sm truncate max-w-72">{item.label}</span>
                <div className="flex items-center w-full">
                  <div className="flex-grow bg-gray-200 h-5 rounded-md">
                    <div
                      className="h-full bg-blue rounded-md transition-all duration-300"
                      style={{ width: `${(item.value / maxValue) * 100}%` }}
                    ></div>
                  </div>
                  <span className="font-semibold w-10 text-right">
                    {item.value}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VoteAdmin;
