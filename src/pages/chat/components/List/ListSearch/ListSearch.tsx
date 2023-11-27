import { IoArrowDownOutline, IoSearchOutline } from "react-icons/io5";
import "./listSearch.css";
import { useAppStore } from "../../../../../store/store";
import { useEffect, useRef } from "react";

export const ListSearch = () => {
  const {
    activeSearch,
    setActiveSearch,
    setShowAvailableUsers,
    focusToSearch,
  } = useAppStore((state) => state);

  const inputSearch = useRef(null);

  useEffect(() => {
    if (focusToSearch) inputSearch.current.focus();
  }, [focusToSearch]);

  return (
    <div className="search-container">
      <input
        ref={inputSearch}
        className="search-input"
        onClick={() => setActiveSearch(true)}
        type="text"
        placeholder="Search"
      />
      <span className={`search-icon ${activeSearch ? "active" : "inactive"}`}>
        {!activeSearch && <IoSearchOutline className="icon-item" />}
        {activeSearch && (
          <IoArrowDownOutline
            className="icon-item back"
            onClick={() => {setShowAvailableUsers(false), setActiveSearch(false)}}
            style={{ color: "#222823" }}
          />
        )}
      </span>
    </div>
  );
};
