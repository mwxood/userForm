import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Field from './Field';

const UserForm = (props) => {
  const [succesMessage, setSuccessMessage] = useState(null);
  const [file, setFile] = useState(null);

  const initialValues = {
    userName: '',
    userEmail: '',
    userPassword: '',
    userDate: '',
    userFile: '',
    userTel: '',
    userAge: '',
    userMessage: '',
    userUrl: '',
  };

  const phoneRegExp =
    /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
  const urlRegExp =
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

  const onSubmitHandler = (values, { resetForm }) => {
    values.userFile = file;
    props.onSubmitHandler(values);
    setSuccessMessage('Your information has been send successfully');
    setTimeout(() => {
      setSuccessMessage(null);
    }, 3000);
    resetForm();
  };

  const onUploadHandler = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
      setFile(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const validateInputs = yup.object().shape({
    userName: yup
      .string()
      .max(30, 'userName length must be less or equal to 30 characters')
      .required('Username is required')
      .nullable(),
    userEmail: yup.string().email().required('Email is Required').nullable(),
    userPassword: yup
      .string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
      .required('Password is Required')
      .nullable(),
    userDate: yup.date().required('Date is required').nullable(),
    userTel: yup
      .string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Telephone is Required')
      .nullable(),
    userAge: yup.number().required('Age is Required').nullable(),
    userUrl: yup
      .string()
      .matches(urlRegExp, 'Url is not valid')
      .required('Url is Required')
      .nullable(),
    userMessage: yup.string().required('Message is required').nullable(),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validateInputs,
    onSubmit: onSubmitHandler,
  });
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-center">
        <h1 className="heading">Contact form</h1>
      </div>
      <div className="user-form">
        {succesMessage && (
          <div className="alert alert-success">{succesMessage}</div>
        )}
        <Form data-testid="userForm" onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3">
            <Row>
              <Col sm={6}>
                <Field
                  name="userName"
                  type="text"
                  dataTestId="userName"
                  touched={formik.touched.userName}
                  errors={formik.errors.userName}
                  labelName="Username"
                  labelError={formik.errors.userName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.userName}
                />
              </Col>

              <Col sm={6}>
                <Field
                  name="userEmail"
                  type="email"
                  dataTestId="userEmail"
                  touched={formik.touched.userEmail}
                  errors={formik.errors.userEmail}
                  labelName="Email"
                  labelError={formik.errors.userEmail}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.userEmail}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3">
            <Row>
              <Col sm={6}>
                <Field
                  name="userPassword"
                  type="password"
                  dataTestId="userPassword"
                  touched={formik.touched.userPassword}
                  errors={formik.errors.userPassword}
                  labelName="Password"
                  labelError={formik.errors.userPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.userPassword}
                />
              </Col>

              <Col sm={6}>
                <Field
                  name="userDate"
                  type="date"
                  dataTestId="userDate"
                  touched={formik.touched.userDate}
                  errors={formik.errors.userDate}
                  labelName="Date"
                  labelError={formik.errors.userDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.userDate}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3">
            <Row>
              <Col sm={6}>
                <Field
                  name="userTel"
                  type="tel"
                  dataTestId="userTel"
                  touched={formik.touched.userTel}
                  errors={formik.errors.userTel}
                  labelName="Telephone"
                  labelError={formik.errors.userTel}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.userTel}
                />
              </Col>
              <Col sm={6}>
                <Field
                  name="userFile"
                  dataTestId="userFile"
                  type="file"
                  labelName="File"
                  onChange={onUploadHandler}
                  value={formik.values.userFile}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3">
            <Row>
              <Col sm={6}>
                <Field
                  name="userAge"
                  type="number"
                  dataTestId="userAge"
                  touched={formik.touched.userAge}
                  errors={formik.errors.userAge}
                  labelName="Age"
                  labelError={formik.errors.userAge}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.userAge}
                />
              </Col>

              <Col sm={6}>
                <Field
                  name="userUrl"
                  type="url"
                  dataTestId="userUrl"
                  touched={formik.touched.userUrl}
                  errors={formik.errors.userUrl}
                  labelName="URL"
                  labelError={formik.errors.userUrl}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.userUrl}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3">
            <Row>
              <Col>
                <Field
                  name="userMessage"
                  as="textarea"
                  dataTestId="userMessage"
                  touched={formik.touched.userMessage}
                  errors={formik.errors.userMessage}
                  labelName="Message"
                  labelError={formik.errors.userMessage}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.userMessage}
                />
              </Col>
            </Row>
          </Form.Group>

          <Button
            data-testid="button-submit"
            className="customBtn"
            type="submit"
          >
            Send information
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UserForm;
