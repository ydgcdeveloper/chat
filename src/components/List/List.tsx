import { ListItems } from "./list-items/ListItems"
import { ListSearch } from "./list-search/ListSearch"
import './list.css'

export const List = () => {
  return (
    <div className="list">
        <ListSearch/>
        <ListItems/>
    </div>
  )
}
