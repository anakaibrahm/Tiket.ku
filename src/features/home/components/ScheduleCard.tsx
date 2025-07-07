import vs from "../../../assets/icons/VS.svg";
import { TeamPayload } from "../../matches/types/matchesPayload.types";

interface ScheduleCardProps {
  teamHome: TeamPayload;
  teamAway: TeamPayload;
}
const ScheduleCard: React.FC<ScheduleCardProps> = ({ teamHome, teamAway }) => {
  return (
    <div className="w-[90%] grid grid-cols-[2fr_1fr_2fr] bg-aquamarine-300 h-[75px] my-10 relative overflow-visible">
      {/* KIRI */}
      <div className="relative flex items-center justify-center pl-4">
        <img
          src={teamHome.logo}
          alt={teamHome.name}
          className="absolute left-5 top-1/2 -translate-y-1/2 w-[125px] h-[125px] object-contain"
        />
        <div className="ml-[100px] flex items-center">
          <p className="uppercase font-extrabold text-4xl text-te-papa-green-500">
            {teamHome.name}
          </p>
        </div>
      </div>

      {/* TENGAH */}
      <div className="relative flex items-center justify-center bg-te-papa-green-500 h-full">
        <img
          src={vs}
          alt="VS"
          className=" absolute top-1/2 -translate-y-1/2 w-[145px] h-[145px]"
        />
      </div>

      {/* KANAN */}
      <div className="relative flex items-center justify-center pr-4">
        <div className="mr-[100px] flex items-center">
          <p className="uppercase font-extrabold text-4xl text-te-papa-green-500">
            {teamAway.name}
          </p>
        </div>
        <img
          src={teamAway.logo}
          alt={teamAway.name}
          className="absolute right-5 top-1/2 -translate-y-1/2 w-[125px] h-[125px] object-contain"
        />
      </div>
    </div>
  );
};

export default ScheduleCard;
