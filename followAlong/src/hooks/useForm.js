import {useLocalStorage} from './useLocalStorage'


const initialValues = {
   firstName: "",
   lastName: ""
}

// CUSTOM HOOK IS JUST A FUNCTION THAT STARTS WITH "USE"
const useForm = (key, initialValues) => {
   
  const [values, setValues] = useLocalStorage(key, initialValues)

  const handleChanges = e => {
    setValues( {
       ...values, 
       [e.target.name]: e.target.value 
    } );
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(firstName);
  };

  const clearForm = e => {
    e.preventDefault();
    setValues(initialValues);
  };

  return [values, handleChanges, handleSubmit, clearForm];
}

export default useForm;