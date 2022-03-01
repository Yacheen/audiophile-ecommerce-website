import {useState} from 'react';


export default function useLocalStorage(key, initialValue) {
  //state to store our value
  //pass initial state function to useState so logic is executed only once
  const [storedValue, setStoredValue] = useState(() => {
    if(typeof window === "undefined") {
      return initialValue;
    }

    try {
      //get from local storage key
      const item = window.localStorage.getItem(key);
      //parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(`localstorage error: ${error}`);
      return initialValue;
    }
  })

  //return a wrapped version of usestate's setter function that
  //persists the new value to localstorage
  const setValue = (value) => {
    try {
      //allow value to be a function so we have same api as usestate 
    const valueToStore =
      //i have no fucking idea what this means
     value instanceof Function ? value(storedValue) : value;
     //save state
     setStoredValue(valueToStore);
     //save to local storage

     if(typeof window !== "undefined") {
       window.localStorage.setItem(key, JSON.stringify(valueToStore));
     }
    } catch(error) {
      console.log(`localstorage set error: ${error}`);
    }
    

  }
  return [storedValue, setValue];
  
}

