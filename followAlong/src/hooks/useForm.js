import { useState } from 'react';

const useLocalStorage = (initialValue) => {
    //1. When we setup state, check to see if our value is already inside of localStorage.
    //2. If value is not in localStorage, set initialValue to localStorage
    //3. When we set state value, also set localStorage value.

    const [storedValue, setStoredValue]  = useState(()=>{
        return initialValue;
    });
}

const useForm = (formFields)=> {
    const [values, setValues] = useState(formFields);
  
    const handleChanges = e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    };
  
    const clearForm = e => {
      e.preventDefault();
      setValues(formFields);
    };
  
    return [values, handleChanges, clearForm];
  }

  export default useForm;