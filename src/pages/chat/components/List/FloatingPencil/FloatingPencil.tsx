import { useAppStore } from "../../../../../store/store";
import "./floatingPencil.css";
import { IoPencilSharp } from "react-icons/io5";

const FloatingPencil = () => {
  const { setShowAvailableUsers, showPencil, setActiveSearch } = useAppStore(
    (state) => state
  );

  return (
    <div
      className={showPencil ? "floating-pencil revealed" : "floating-pencil"}
      onClick={() => {
        setShowAvailableUsers(true);
        setActiveSearch(true);
      }}
    >
      <div className="pencil">
        <IoPencilSharp className="pencil-icon" />
      </div>
    </div>
  );
};

export default FloatingPencil;
