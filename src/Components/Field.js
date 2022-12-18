import Form from 'react-bootstrap/Form';

const Field = (props) => {
  return (
    <>
      <label htmlFor={props.name} className="form-label">
        {props.touched && props.errors ? (
          <span className="error-message">{props.errors}</span>
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
        data-testid={props.dataTestId}
        className={props.errors ? 'error' : ''}
        value={props.value}
      />
    </>
  );
};

export default Field;
