import { useEffect, useState } from 'react';
import Input from './Input.jsx';
import './Task.css';
function Task() {
  const [form, setForm] = useState({
    input1: { value: "", isValid: null, validationRule: value => value.length > 3 && /^[A-Za-z ]+$/.test(value) },
    input2: { value: "", isValid: null, validationRule: value => /^\S+@\S+\.\S+$/.test(value) },
    input3: { value: Number, isValid: null, validationRule: value => /^[0-9]\d{9}$/.test(value) } 
  });
  useEffect(() => {
    Object.keys(form).forEach((key) => {
      const isValid = form[key].validationRule(form[key].value);
      if (isValid !== form[key].isValid) {
        setForm(prevState => ({
          ...prevState,
          [key]: { ...prevState[key], isValid }
        }));
      }
    });
  }, [form.input1.value, form.input2.value, form.input3.value]);
  useEffect(() => {
    if (
      form.input1.isValid === true &&
      form.input2.isValid === true &&
      form.input3.isValid === true
    ) {
      alert("All inputs are valid!!");
    }
  }, [form.input1.isValid, form.input2.isValid, form.input3.isValid]);
  const handleInputChange = (e, inputName) => {
    const { value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [inputName]: { ...prevState[inputName], value }
    }));
  };
  return (
    <div className='App'>
      <h2>Form Validation</h2>
      <Input
      
        label="Name: "
        value={form.input1.value}
        onChange={(e) => handleInputChange(e, 'input1')}
        isValid={form.input1.isValid}
      />
      <Input
        label="Email: "
        value={form.input2.value}
        onChange={(e) => handleInputChange(e, 'input2')}
        isValid={form.input2.isValid}
      />
      <Input
        label="Mobile number: "
        value={form.input3.value}
        onChange={(e) => handleInputChange(e, 'input3')}
        isValid={form.input3.isValid}
      />
    </div>
  );
}

export default Task;
