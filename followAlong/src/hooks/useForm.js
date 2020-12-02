import { useState } from 'react';

const useForm = (initialState)=> {
    const [values, setValues] = useState(initialState);
  
    const handleChanges = e => {
      console.log(e.target.name);
      
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    };
  
    const clearForm = e => {
      e.preventDefault();
      setValues(initialState);
    };
  
    return [values, handleChanges, clearForm];
  }

  export default useForm;