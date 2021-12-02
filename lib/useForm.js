import { useState, useEffect } from 'react';

export default function useForm(initial = {}) {

  const [inputs, setInputs] = useState(initial);

  //! with the update function, the init state must be the existing data from the database, on the first load, the server waits for the data to come back from the api and renders the page, on a client there is a loading state, fixing this requires using useEffect() - allows monitoring of pieces of state
  
  const initialValues = Object.values(initial).join('');
  useEffect(() => {
    setInputs(initial);
  }, [initialValues]);

  function handleChange(e) {
    let { value, name, type,id  } = e.target;
    if (type === 'number') {
      value = parseInt(value); // ? fix the fact that html forms return strings
    }
    if (type === 'file') {
      [value] = e.target.files; // ? destr first value out of files arr
    }
    if (type ==="checkbox") { //&& id==="somehting"
      value = e.target.checked;
    }
    
    setInputs({
      // copy the existing state
      ...inputs,
      // overrides old properties
      [name]: value, // dynamic
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {

    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => {
        console.log(inputs);
        return [(key, '')];
      })
    );
    setInputs(blankState);
  }

  //! To surface data or functionality from a custom hook, return it
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
