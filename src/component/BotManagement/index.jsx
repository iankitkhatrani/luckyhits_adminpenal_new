import ProtoTypes from "prop-types";
import PlayerTab from "./PlayerTab";
function BotManagment({ pageSize }) {
  return (
    <div className="w-full rounded-lg bg-white px-[24px] py-[20px] dark:bg-darkblack-600">
      <div className="flex flex-col space-y-5">
        <PlayerTab pageSize={pageSize} />
      </div>
    </div>
  );
}

BotManagment.propTypes = {
  pageSize: ProtoTypes.number,
};

export default BotManagment;
