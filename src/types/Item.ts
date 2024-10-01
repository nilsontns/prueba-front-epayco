interface Item {
    id?: number;
    title: string;
    body: string;
    userId?: number;
}

interface ItemProps {
    item: Item;
    isView?: boolean;
    setViewItem?: (item: Item) => void;
}
  
interface ItemListProps {
    items: Item[];
    setViewItem: (item: Item) => void;
}

interface IviewItemProps {
    item: Item;
    handleClose: () => void;
}

interface CustomError {
    message: string;
  }
  

export type { Item, ItemProps, ItemListProps, CustomError, IviewItemProps };