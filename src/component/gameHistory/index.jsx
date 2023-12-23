import ProtoTypes from "prop-types";
import PlayerTab from "./PlayerTab";
function GameHistory({ pageSize,gameName }) {
  return (
    <div className="w-full rounded-lg bg-white px-[24px] py-[20px] dark:bg-darkblack-600">
      <div className="flex flex-col space-y-5">
        
        <PlayerTab pageSize={pageSize} gameName={gameName} />
       
      </div>
    </div>
  );
}

GameHistory.propTypes = {
  pageSize: ProtoTypes.number,
};

export default GameHistory;
