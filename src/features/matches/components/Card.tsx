import { MatchPayload } from "../types/matchesPayload.types";
import { TeamSection } from "./TeamSection";

type MatchCardProps = Omit<MatchPayload, "id" | "matchId" | "tickets"> & {
  onClick?: () => void;
};
const MatchScheduleCard: React.FC<MatchCardProps> = ({
  teamHome,
  teamAway,
  matchTime,
  timeZone,
  matchDate,
  stadium,
  onClick,
}) => {
  return (
    <div className="grid grid-cols-3 grid-rows[auto_1fr]" onClick={onClick}>
      <TeamSection name={teamHome.name} logo={teamHome.logo} />

      <section className="flex justify-center items-center flex-col bg-gray-600 cursor-pointer">
        <h2 className="text-4xl font-extrabold text-white">{matchTime}</h2>
        <h2 className="text-4xl font-extrabold text-white">{timeZone}</h2>
      </section>

      <TeamSection name={teamAway.name} logo={teamAway.logo} />

      <section className="flex justify-center items-center flex-col row-span-2 col-start-1 col-end-4">
        <h2 className="text-base font-extrabold">{matchDate}</h2>
        <p className="text-xs font-normal">{stadium}</p>
      </section>
    </div>
  );
};

export default MatchScheduleCard;
