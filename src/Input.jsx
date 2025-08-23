import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function Input({ label, value, onChange, isValid }) {
  const formcontrol = isValid === false ? 'invalid' : isValid === true ? 'valid' : '';

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text>{label}</InputGroup.Text>
      <Form.Control
        value={value}
        onChange={onChange}
        className={formcontrol}
        aria-label={label}
    
      />
    </InputGroup>
  );
}

export default Input;
