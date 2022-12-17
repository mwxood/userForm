import Form from 'react-bootstrap/Form';

const Input = (props) => {
  return (
    <>
      <label htmlFor={props.name} className="form-label">
        {props.touched && props.errors ? (
          <div className="error-message">{props.errors}</div>
        ) : (
          props.labelName
        )}
      </label>
      <Form.Control
        id={props.name}
        type={props.type}
        as={props.as}
        name={props.name}
        autoComplete="off"
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={props.errors ? 'error' : ''}
        value={props.value}
      />
    </>
  );
};

export default Input;
