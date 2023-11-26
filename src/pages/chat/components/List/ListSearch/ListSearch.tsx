import { IoArrowDownOutline, IoSearchOutline } from "react-icons/io5";
import "./listSearch.css";
import { useAppStore } from "../../../../../store/store";

export const ListSearch = () => {
  const { activeSearch, setActiveSearch, setShowAvailableUsers } = useAppStore(
    (state) => state
  );

  return (
    <div className="search-container">
      <input
        className="search-input"
        onClick={() => setActiveSearch(true)}
        onBlur={() => setActiveSearch(false)}
        type="text"
        placeholder="Search"
      />
      <span className={`search-icon ${activeSearch ? "active" : "inactive"}`}>
        {!activeSearch && <IoSearchOutline className="icon-item" />}
        {activeSearch && (
          <IoArrowDownOutline
            className="icon-item back"
            onClick={() => setShowAvailableUsers(false)}
            style={{ color: "#222823" }}
          />
        )}
      </span>
    </div>
  );
};
