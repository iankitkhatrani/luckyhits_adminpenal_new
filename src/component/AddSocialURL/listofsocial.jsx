import ProtoTypes from "prop-types";
import Pagination from "../Pagination";
import Search from "../forms/Search";
import UserTab from "./UserTab";
function ListSocial({ pageSize }) {
  return (
    <div className="w-full rounded-lg bg-white px-[24px] py-[20px] dark:bg-darkblack-600">
      <div className="flex flex-col space-y-5">
        <div className="flex h-[56px] w-full space-x-4">
          <Search />
          
        </div>
        <UserTab pageSize={pageSize} />
        <Pagination />
      </div>
    </div>
  );
}

ListSocial.propTypes = {
  pageSize: ProtoTypes.number,
};

export default ListSocial;
