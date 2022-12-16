import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { postUserInfo } from '../api/api';

class UserInformationSecond extends React.Component {
  initialValues = {
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

  onSubmitHandler(values, { resetForm }) {
    postUserInfo(values);
    // setSuccessMessage('Your information has been send successfully');
    resetForm();
  }

  validateInputs = yup.object().shape({
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
      // .matches(phoneRegExp, 'Phone number is not valid')
      .required('Telephone is Required')
      .nullable(),
    userAge: yup.number().required('Age is Required').nullable(),
    userUrl: yup
      .string()
      // .matches(urlRegExp, 'Url is not valid')
      .required('Url is Required')
      .nullable(),
    userMessage: yup.string().required('Message is required').nullable(),
  });

  formik = useFormik({
    initialValues: this.initialValues,
    validationSchema: this.validateInputs,
    onSubmit: this.onSubmitHandler,
  });

  render() {
    return (
      <div className="mt-5">
        <div className="d-flex justify-content-center">
          <h1 className="heading">Contact form</h1>
        </div>
        <div className="user-form">
          <Form onSubmit={this.formik.handleSubmit}>
            <Form.Group className="mb-3">
              <Row style={{ position: 'relative' }}>
                <Col sm={6}>
                  <label htmlFor="userName" className="form-label">
                    {this.formik.touched.userName &&
                    this.formik.errors.userName ? (
                      <div className="error-message">
                        {this.formik.errors.userName}
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
                    onChange={this.formik.handleChange}
                    onBlur={this.formik.handleBlur}
                    className={this.formik.errors.userName ? 'error' : ''}
                    value={this.formik.values.userName}
                  />
                </Col>

                <Col sm={6}>
                  <label htmlFor="userEmail" className="form-label">
                    {this.formik.touched.userEmail &&
                    this.formik.errors.userEmail ? (
                      <div className="error-message">
                        {this.formik.errors.userEmail}
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
                    onChange={this.formik.handleChange}
                    onBlur={this.formik.handleBlur}
                    className={this.formik.errors.userEmail ? 'error' : ''}
                    value={this.formik.values.userEmail}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row>
                <Col sm={6}>
                  <label htmlFor="userPassword" className="form-label">
                    {this.formik.touched.userPassword &&
                    this.formik.errors.userPassword ? (
                      <div className="error-message">
                        {this.formik.errors.userPassword}
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
                    onChange={this.formik.handleChange}
                    onBlur={this.formik.handleBlur}
                    className={this.formik.errors.userPassword ? 'error' : ''}
                    value={this.formik.values.userPassword}
                  />
                </Col>

                <Col sm={6}>
                  <label htmlFor="userDate" className="form-label">
                    {this.formik.touched.userDate &&
                    this.formik.errors.userDate ? (
                      <div className="error-message">
                        {this.formik.errors.userDate}
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
                    onChange={this.formik.handleChange}
                    onBlur={this.formik.handleBlur}
                    className={this.formik.errors.userDate ? 'error' : ''}
                    value={this.formik.values.userDate}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row>
                <Col sm={6}>
                  <label htmlFor="userTel" className="form-label">
                    {this.formik.touched.userTel && this.formik.errors.tel ? (
                      <div className="error-message">
                        {this.formik.errors.userTel}
                      </div>
                    ) : (
                      'Telephone'
                    )}
                  </label>
                  <Form.Control
                    type="tel"
                    name="userTel"
                    id="userTel"
                    autoComplete="off"
                    onChange={this.formik.handleChange}
                    onBlur={this.formik.handleBlur}
                    className={this.formik.errors.userTel ? 'error' : ''}
                    value={this.formik.values.userTel}
                  />
                </Col>
                <Col sm={6}>
                  <label htmlFor="userFile" className="form-label">
                    {this.formik.touched.userFile &&
                    this.formik.errors.userFile ? (
                      <div className="error-message">
                        {this.formik.errors.userFile}
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
                    onChange={this.formik.handleChange}
                    onBlur={this.formik.handleBlur}
                    className={this.formik.errors.userFile ? 'error' : ''}
                    value={this.formik.values.userFile}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row>
                <Col sm={6}>
                  <label htmlFor="file" className="form-label">
                    {this.formik.touched.userAge &&
                    this.formik.errors.userAge ? (
                      <div className="error-message">
                        {this.formik.errors.userAge}
                      </div>
                    ) : (
                      'Age'
                    )}
                  </label>
                  <Form.Control
                    type="number"
                    name="userAge"
                    id="userAge"
                    autoComplete="off"
                    onChange={this.formik.handleChange}
                    onBlur={this.formik.handleBlur}
                    className={this.formik.errors.userAge ? 'error' : ''}
                    value={this.formik.values.userAge}
                  />
                </Col>

                <Col sm={6}>
                  <label htmlFor="userUrl" className="form-label">
                    {this.formik.touched.userUrl &&
                    this.formik.errors.userUrl ? (
                      <div className="error-message">
                        {this.formik.errors.userUrl}
                      </div>
                    ) : (
                      'URL'
                    )}
                  </label>
                  <Form.Control
                    type="url"
                    name="userUrl"
                    id="userUrl"
                    autoComplete="off"
                    onChange={this.formik.handleChange}
                    onBlur={this.formik.handleBlur}
                    className={this.formik.errors.userUrl ? 'error' : ''}
                    value={this.formik.values.userUrl}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <label htmlFor="userMessage" className="form-label">
                    {this.formik.touched.userMessage &&
                    this.formik.errors.userMessage ? (
                      <div className="error-message">
                        {' '}
                        {this.formik.errors.userMessage}
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
                    onChange={this.formik.handleChange}
                    onBlur={this.formik.handleBlur}
                    className={this.formik.errors.userMessage ? 'error' : ''}
                    value={this.formik.values.userMessage}
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
}

export default UserInformationSecond;
