import { FC } from "react";
import { IviewItemProps } from "../../../types/Item";
import ItemComponent from "../../base/Item";

const ItemView: FC<IviewItemProps> = ({ item, handleClose }) => {
  
  return (
    <div className="space-y-4">
      <button onClick={handleClose} className="bg-blue-500 text-white px-4 py-2 rounded">
        Close
      </button>
      <ItemComponent key={item.id} item={item} />
    </div>
  );
};

export default ItemView;
