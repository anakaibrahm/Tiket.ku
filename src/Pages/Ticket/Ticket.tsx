import { useEffect } from "react";
import { GetDatas, GetUsers } from "../../api/datas";

const Ticket = () => {
  const { matchDatas } = GetDatas();
  const { userDatas } = GetUsers();

  const selectedMatchId = sessionStorage.getItem("selectedMatchId");
  const selectedUserId = sessionStorage.getItem("selectedUserId");

  const match = matchDatas.find((m) => m.matchId === selectedMatchId);
  const user = userDatas.find((u) => u.id === selectedUserId);

  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       Loading...
  //     </div>
  //   );
  // }

  useEffect(() => {
    if (match && user) {
      window.print();
    }
  }, [match, user]);

  if (!match || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Data pertandingan atau user tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
        <div className="bg-blue-800 text-white text-center !py-4 !px-6">
          <h1 className="text-2xl font-bold">Soccer Match Ticket</h1>
          <p className="text-sm">Official Entry Pass</p>
        </div>

        <div className="!p-6 space-y-4">
          <div>
            <p className="text-gray-600 text-sm">Match</p>
            <h2 className="text-xl font-semibold">
              {match.team1.name} vs {match.team2.name}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600 text-sm">Date</p>
              <p className="text-md font-medium">{match.matchDate}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Time</p>
              <p className="text-md font-medium">
                {match.matchTime} {match.timeZone}
              </p>
            </div>
          </div>

          <div>
            <p className="text-gray-600 text-sm">Venue</p>
            <p className="text-md font-medium">{match.stadium}</p>
          </div>

          <div className="flex justify-between items-center border-t border-dashed !pt-4 !mt-4">
            <div>
              <p className="text-gray-600 text-sm">Seat</p>
              <p className="text-lg font-semibold">{user.tribun}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm">Ticket No</p>
              <p className="text-md font-semibold">{user.id}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 text-center text-xs text-gray-500 !py-2 !px-4">
          Please bring this ticket for entry. No re-entry allowed.
        </div>
      </div>
    </div>
  );
};

export default Ticket;
