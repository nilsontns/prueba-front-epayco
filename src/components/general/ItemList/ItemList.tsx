import { FC } from "react";
import { ItemListProps, Item} from "../../../types/Item";
import ItemComponent from "../../base/Item";

const ItemList: FC<ItemListProps> = ({ items, setViewItem }) => {
    return (
      <div className="space-y-4">
        {items.map((item: Item, index: number) => (
          <div key={`item-${index}`} >
            <ItemComponent  item={item} setViewItem={setViewItem} isView={true} />
          </div>
        ))}
      </div>
    );
  };

export default ItemList;
