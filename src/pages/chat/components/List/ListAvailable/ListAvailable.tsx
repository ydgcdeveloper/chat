import { useAppStore } from "../../../../../store/store";
import AvailableItem from "./AvailableItem/AvailableItem";
import "./listAvailable.css";
import { useEffect } from "react";

const ListAvailable = () => {
  const { chatItems, showAvailableUsers, availableUsers, getAvailableUsers } =
    useAppStore((state) => state);

  useEffect(() => {
    getAvailableUsers();
  }, [showAvailableUsers]);

  return (
    <div className="list-available">
      {availableUsers.map((item) => (
        <AvailableItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ListAvailable;
