import { ListItems } from "../list-items/ListItems"
import { ListSearch } from "./ListSearch"

export const List = () => {
  return (
    <div className="list">
        <ListSearch/>
        <ListItems/>
    </div>
  )
}
