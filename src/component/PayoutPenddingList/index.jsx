import ProtoTypes from "prop-types";
import PlayerTab from "./PlayerTab";
function PayoutPendding({ pageSize,status }) {
  return (
    <div className="w-full rounded-lg bg-white px-[24px] py-[20px] dark:bg-darkblack-600">
      <div className="flex flex-col space-y-5">
        <PlayerTab pageSize={pageSize} status={status}/>
      </div>
    </div>
  );
}

PayoutPendding.propTypes = {
  pageSize: ProtoTypes.number,
};

export default PayoutPendding;
