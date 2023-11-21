import { IoArrowDownOutline, IoSearchOutline } from "react-icons/io5";
import { useAppStore } from "../../store/store";
import './listSearch.css';

export const ListSearch = () => {
  const { activeSearch, setActiveSearch } = useAppStore((state) => state);

  return (
    <div className="search-container">
      <input
        className="search-input"
        onClick={() => setActiveSearch(true)}
        onBlur={() => setActiveSearch(false)}
        type="text"
        placeholder="Search"
      />
      <span className={`search-icon ${activeSearch ? 'active' : 'inactive'}`}>
        {!activeSearch && <IoSearchOutline className="icon-item" />}
        {activeSearch && <IoArrowDownOutline className="icon-item" style={{color: '#222823'}} />}
      </span>
    </div>
  );
};
