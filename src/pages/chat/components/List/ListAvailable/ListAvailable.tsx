import { useAppStore } from "../../../../../store/store";
import AvailableItem from "./AvailableItem/AvailableItem";
import "./listAvailable.css";

const ListAvailable = () => {
    const { chatItems } = useAppStore((state) => state);

  return <div className="list-available">
    {chatItems.map( item => (
          <AvailableItem key={item.id} item={item}/>
        ))}
  </div>;
};

export default ListAvailable;
