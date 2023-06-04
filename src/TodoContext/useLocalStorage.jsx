import React from "react";

function useLocalStorage(itemTag, defaultValue){
    const [item, setItemValue] = React.useState(defaultValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
      try{
        setTimeout(() => {
          const itemFromStorage = localStorage.getItem(itemTag);
          if (itemFromStorage){
            const parsedItem = JSON.parse(itemFromStorage)
            setItemValue( parsedItem );
            return setLoading(false);
          }
          localStorage.setItem( itemTag, JSON.stringify( defaultValue ) );
          return setItemValue( defaultValue );
        }, 3000)
      }catch(err){
        setError(true);
      }
    }, []);

    const setItem = (item) => {
      const stringifiedItem = JSON.stringify(item);
      localStorage.setItem(itemTag, stringifiedItem);
      setItemValue(item);
    };
  
    return {
      item,
      setItem,
      error,
      loading
    }
  }
export {
  useLocalStorage
}