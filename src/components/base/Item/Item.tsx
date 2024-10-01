import { FC } from "react";
import { ItemProps, Item } from "../../../types/Item";

const ItemComponent: FC<ItemProps> = ({ item, isView = false, setViewItem  }) => {

    const handleClick = (item: Item) => {
        if(!isView) return;
        setViewItem && setViewItem(item);
    }

    return (
        <div className="p-4 border-b border-gray-200" onClick={() => handleClick(item)} >
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600">{item.body}</p>
        </div>
    );
};

export default ItemComponent;