import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { postUserInfo } from '../api/api';

function UserInformation() {
  const [succesMessage, setSuccessMessage] = useState(null);

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
    postUserInfo(values);
    setSuccessMessage('Your information has been send successfully');
    resetForm();
  };

  setTimeout(() => {
    setSuccessMessage(null);
  }, 3000);

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
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3">
            <Row style={{ position: 'relative' }}>
              <Col sm={6}>
                <label htmlFor="userName" className="form-label">
                  {formik.touched.userName && formik.errors.userName ? (
                    <div className="error-message">
                      {formik.errors.userName}
                    </div>
                  ) : (
                    'Username'
                  )}
                </label>
                <Form.Control
                  id="userName"
                  type="text"
                  name="userName"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.errors.userName ? 'error' : ''}
                  value={formik.values.userName}
                />
              </Col>

              <Col sm={6}>
                <label htmlFor="userEmail" className="form-label">
                  {formik.touched.userEmail && formik.errors.userEmail ? (
                    <div className="error-message">
                      {formik.errors.userEmail}
                    </div>
                  ) : (
                    'Email'
                  )}
                </label>
                <Form.Control
                  type="email"
                  name="userEmail"
                  id="userEmail"
                  autoComplete="off"
                  placeholder="Enter your email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.errors.userEmail ? 'error' : ''}
                  value={formik.values.userEmail}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3">
            <Row>
              <Col sm={6}>
                <label htmlFor="userPassword" className="form-label">
                  {formik.touched.userPassword && formik.errors.userPassword ? (
                    <div className="error-message">
                      {formik.errors.userPassword}
                    </div>
                  ) : (
                    'Password'
                  )}
                </label>
                <Form.Control
                  type="password"
                  name="userPassword"
                  id="userPassword"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.errors.userPassword ? 'error' : ''}
                  value={formik.values.userPassword}
                />
              </Col>

              <Col sm={6}>
                <label htmlFor="userDate" className="form-label">
                  {formik.touched.userDate && formik.errors.userDate ? (
                    <div className="error-message">
                      {formik.errors.userDate}
                    </div>
                  ) : (
                    'Date'
                  )}
                </label>
                <Form.Control
                  type="date"
                  name="userDate"
                  id="userDate"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.errors.userDate ? 'error' : ''}
                  value={formik.values.userDate}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3">
            <Row>
              <Col sm={6}>
                <label htmlFor="userTel" className="form-label">
                  {formik.touched.userTel && formik.errors.tel ? (
                    <div className="error-message">{formik.errors.userTel}</div>
                  ) : (
                    'Telephone'
                  )}
                </label>
                <Form.Control
                  type="tel"
                  name="userTel"
                  id="userTel"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.errors.userTel ? 'error' : ''}
                  value={formik.values.userTel}
                />
              </Col>
              <Col sm={6}>
                <label htmlFor="userFile" className="form-label">
                  {formik.touched.userFile && formik.errors.userFile ? (
                    <div className="error-message">
                      {formik.errors.userFile}
                    </div>
                  ) : (
                    'File'
                  )}
                </label>
                <Form.Control
                  type="file"
                  name="userFile"
                  id="userFile"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.errors.userFile ? 'error' : ''}
                  value={formik.values.userFile}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3">
            <Row>
              <Col sm={6}>
                <label htmlFor="file" className="form-label">
                  {formik.touched.userAge && formik.errors.userAge ? (
                    <div className="error-message">{formik.errors.userAge}</div>
                  ) : (
                    'Age'
                  )}
                </label>
                <Form.Control
                  type="number"
                  name="userAge"
                  id="userAge"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.errors.userAge ? 'error' : ''}
                  value={formik.values.userAge}
                />
              </Col>

              <Col sm={6}>
                <label htmlFor="userUrl" className="form-label">
                  {formik.touched.userUrl && formik.errors.userUrl ? (
                    <div className="error-message">{formik.errors.userUrl}</div>
                  ) : (
                    'URL'
                  )}
                </label>
                <Form.Control
                  type="url"
                  name="userUrl"
                  id="userUrl"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.errors.userUrl ? 'error' : ''}
                  value={formik.values.userUrl}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3">
            <Row>
              <Col>
                <label htmlFor="userMessage" className="form-label">
                  {formik.touched.userMessage && formik.errors.userMessage ? (
                    <div className="error-message">
                      {' '}
                      {formik.errors.userMessage}
                    </div>
                  ) : (
                    'Message'
                  )}
                </label>
                <Form.Control
                  as="textarea"
                  name="userMessage"
                  id="userMessage"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.errors.userMessage ? 'error' : ''}
                  value={formik.values.userMessage}
                />
              </Col>
            </Row>
          </Form.Group>

          <Button className="customBtn" type="submit">
            Send information
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default UserInformation;
