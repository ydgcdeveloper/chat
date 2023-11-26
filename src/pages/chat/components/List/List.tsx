import { useAppStore } from "../../../../store/store";
import { ListHeader } from "./ListHeader/ListHeader";
import FloatingPencil from "./FloatingPencil/FloatingPencil";
import { ListSearch } from "./ListSearch/ListSearch";
import "./list.css";
import { ListItems } from "./ListItems/ListItems";
import ListAvailable from "./ListAvailable/ListAvailable";

export const List = () => {
  const { showAvailableUsers, setShowPencil } = useAppStore((state) => state);
  return (
    <div
      className="list"
      onMouseEnter={() => setShowPencil(true)}
      onMouseLeave={() => setShowPencil(false)}
    >
      <ListHeader />
      <ListSearch />
      <FloatingPencil />
      {showAvailableUsers && <ListAvailable />}
      {!showAvailableUsers && <ListItems />}
    </div>
  );
};
