import { TeamSection } from "./TeamSection";
import { MatchCardProps } from "./matchesProps";

const MatchScheduleCard: React.FC<MatchCardProps> = ({
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
      <TeamSection name={team1.name} logo={team1.logo} />

      <section className="flex justify-center items-center flex-col bg-gray-600 cursor-pointer">
        <h2 className="text-4xl font-extrabold text-white">{matchTime}</h2>
        <h2 className="text-4xl font-extrabold text-white">{timeZone}</h2>
      </section>

      <TeamSection name={team2.name} logo={team2.logo} />

      <section className="flex justify-center items-center flex-col row-span-2 col-start-1 col-end-4">
        <h2 className="text-base font-extrabold">{matchDate}</h2>
        <p className="text-xs font-normal">{stadium}</p>
      </section>
    </div>
  );
};

export default MatchScheduleCard;
