import { useState, useEffect } from "react";
import { useItems } from "../../../hooks/useItems";
import { useAddItem } from "../../../hooks/useAddItem";
import { ItemList, Form, ItemView } from "../../general";
import { handleError } from "../../../utils/errorHandler";
import { FormData } from "../../../types/FormData";
import { Item } from "../../../types/Item";

const Home = () => {
  const { data: items, error, isLoading } = useItems();
  const [itemsData, setItemsData] = useState<Item[]>(items ?? []);
  const [mutationError, setMutationError] = useState<string | null>(null);
  const [viewItem, setViewItem] = useState<Item | null>(null);

  const mutation = useAddItem();

  useEffect(() => {
    if(items) {
      const localItems = localStorage.getItem("items") ?? "[]";
      const storageItems = JSON.parse(localItems);
      setItemsData([...items, ...storageItems]);
    }
  }, [items]);

  const onSubmit = (data: FormData) => {
    const newItem: Item = {
      title: data.title || "Default Title",
      body: data.body || "Default Body",
    };

    mutation.mutate(newItem, {
      onError: (error) => {
        const errorMessage = handleError(error);
        setMutationError(errorMessage);
      },
      onSuccess: (response) => {
        console.log("🚀 ~ onSubmit ~ response:", response);
        setViewItem(response);
        const updatedItems = [...itemsData, response];
        setItemsData(updatedItems);
        localStorage.setItem("items", JSON.stringify(updatedItems));
        console.log("Item added successfully");
      },
    });
  };

  const handleClose = () => {
    setViewItem(null);
  };

  if (isLoading) return <div className="text-center py-8">Loading...</div>;

  if (error) {
    const errorMessage = handleError(error);
    return (
      <div className="text-center text-red-500 position-absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Error: {errorMessage}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline bg-blue-500 text-white text-center py-2 rounded">
        Add New Item
      </h1>
      {mutationError && (
        <div className="text-center text-red-500 mb-4">
          Error: {mutationError}
        </div>
      )}
      <Form onSubmit={onSubmit} />
      <h2 className="text-2xl font-semibold mt-8 mb-4">Items List</h2>
      {!!viewItem && <ItemView item={viewItem} handleClose={handleClose} />}
      {!viewItem && <ItemList items={itemsData} setViewItem={setViewItem} />}
    </div>
  );
};

export default Home;
