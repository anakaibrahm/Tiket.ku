import React from "react";

interface MatchScheduleCard {
  team1: {
    name: string;
    logo: string;
  };
  team2: {
    name: string;
    logo: string;
  };
  matchTime: string;
  timeZone: string;
  matchDate: string;
  stadium: string;
  onClick?: () => void;
}

const MatchScheduleCard: React.FC<MatchScheduleCard> = ({
  team1,
  team2,
  matchTime,
  timeZone,
  matchDate,
  stadium,
  onClick,
}) => {
  return (
    <div className="grid grid-cols-3 grid-rows[auto_1fr]" onClick={onClick}>
      <section className="flex justify-center items-center flex-col gap-2 bg-gray-400 !p-[0.5rem] cursor-pointer ">
        <h2 className="uppercase text-2xl font-bold text-white">
          {team1.name}
        </h2>
        <img className="h-auto w-[55%]" src={team1.logo} alt="" />
      </section>
      <section className="flex justify-center items-center flex-col bg-gray-600 cursor-pointer">
        <h2 className="text-4xl font-extrabold text-white">{matchTime}</h2>
        <h2 className="text-4xl font-extrabold text-white">{timeZone}</h2>
      </section>
      <section className="flex justify-center items-center flex-col gap-2 bg-gray-400 !p-[0.5rem] cursor-pointer">
        <h2 className="uppercase text-2xl font-bold text-white mb-2">
          {team2.name}
        </h2>
        <img className="h-auto w-[45%]" src={team2.logo} alt="" />
      </section>
      <section className="flex justify-center items-center flex-col row-span-2 col-start-1 col-end-4">
        <h2 className="text-base font-extrabold">{matchDate}</h2>
        <p className="text-xs font-normal">{stadium}</p>
      </section>
    </div>
  );
};

export default MatchScheduleCard;
