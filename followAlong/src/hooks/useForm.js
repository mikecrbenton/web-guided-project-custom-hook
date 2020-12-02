import { useState } from 'react';

const useForm = (formFields)=> {
    const [values, setValues] = useState(formFields);
  
    const handleChanges = e => {
      console.log(e.target.name);
      
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