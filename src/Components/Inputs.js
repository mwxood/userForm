import { useFormik } from 'formik';
import * as yup from 'yup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { postUserInfo } from '../api/api';

const Inputs = () => {
  const initialValues = {
    userName: null,
    email: null,
    password: null,
    date: null,
    file: null,
    image: null,
    tel: null,
    userAge: null,
    userMessage: null,
    userUrl: null,
  };

  // postUserInfo('test');

  const phoneRegExp =
    /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
  const urlRegExp =
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

  const onSubmitHandler = (values, { resetForm }) => {};

  const validateInputs = yup.object().shape({
    userName: yup
      .string()
      .max(30, 'userName length must be less or equal to 30 characters')
      .required('Filed name is required')
      .nullable(),
    email: yup.string().email().required('Email is Required').nullable(),
    password: yup
      .string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
      .required('Password is Required')
      .nullable(),
    date: yup.date().required('Date is required').nullable(),
    tel: yup
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
    <div className="mb-5 userForm">
      <div className="mt-5 m-5 d-flex justify-content-center">
        <h1 className="heading">Contact us</h1>
      </div>
      <Form onSubmit={formik.handleSubmit}>
        <Row style={{ position: 'relative' }}>
          <Col sm={6}>
            {formik.touched.userName && formik.errors.userName ? (
              <div className="alert alert-danger">{formik.errors.userName}</div>
            ) : null}
            <FloatingLabel
              controlId="floatingInput"
              label="Username"
              className="mb-3"
            >
              <Form.Control
                id="userName"
                type="text"
                name="userName"
                autoComplete="off"
                placeholder="name@example.com"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                className={formik.errors.userName ? 'error' : ''}
              />
            </FloatingLabel>
          </Col>

          <Col sm={6}>
            {formik.touched.email && formik.errors.email ? (
              <div className="alert alert-danger">{formik.errors.email}</div>
            ) : null}
            <FloatingLabel
              controlId="floatingEmail"
              label="Email"
              className="mb-3"
            >
              <Form.Control
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.errors.email ? 'error' : ''}
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Row>
            <Col sm={6}>
              {formik.touched.password && formik.errors.password ? (
                <div className="alert alert-danger">
                  {formik.errors.password}
                </div>
              ) : null}
              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  name="password"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.errors.password ? 'error' : ''}
                />
              </FloatingLabel>
            </Col>

            <Col sm={6}>
              {formik.touched.date && formik.errors.date ? (
                <div className="alert alert-danger">{formik.errors.date}</div>
              ) : null}

              <FloatingLabel
                controlId="floatingData"
                label="Date"
                className="mb-3"
              >
                <Form.Control
                  type="date"
                  name="date"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.errors.date ? 'error' : ''}
                />
              </FloatingLabel>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Row>
            <Col sm={6}>
              {formik.touched.tel && formik.errors.tel ? (
                <div className="alert alert-danger">{formik.errors.tel}</div>
              ) : null}
              <FloatingLabel
                controlId="floatingTel"
                label="Telephone"
                className="mb-3"
              >
                <Form.Control
                  type="tel"
                  name="tel"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.errors.tel ? 'error' : ''}
                />
              </FloatingLabel>
            </Col>
            <Col sm={6}>
              {formik.touched.file && formik.errors.file ? (
                <div className="alert alert-danger">{formik.errors.file}</div>
              ) : null}
              <Form.Control
                type="file"
                name="file"
                autoComplete="off"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.errors.file ? 'error' : ''}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Row>
            <Col sm={6}>
              {formik.touched.userAge && formik.errors.userAge ? (
                <div className="alert alert-danger">
                  {formik.errors.userAge}
                </div>
              ) : null}
              <FloatingLabel
                controlId="floatingNumber"
                label="Age"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  name="userAge"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.errors.age ? 'error' : ''}
                />
              </FloatingLabel>
            </Col>

            <Col sm={6}>
              {formik.touched.userUrl && formik.errors.userUrl ? (
                <div className="alert alert-danger">
                  {formik.errors.userUrl}
                </div>
              ) : null}
              <FloatingLabel
                controlId="floatingUrl"
                label="Portfolio URL"
                className="mb-3"
              >
                <Form.Control
                  type="url"
                  name="userUrl"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.errors.userUrl ? 'error' : ''}
                />
              </FloatingLabel>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Row>
            <Col>
              {formik.touched.userMessage && formik.errors.userMessage ? (
                <div className="alert alert-danger">
                  {formik.errors.userMessage}
                </div>
              ) : null}
              <FloatingLabel
                controlId="floatingTextarea"
                label="Message"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  name="userMessage"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={formik.errors.userMessage ? 'error' : ''}
                />
              </FloatingLabel>
            </Col>
          </Row>
        </Form.Group>

        <Button type="submit">Send information</Button>
      </Form>
    </div>
  );
};

export default Inputs;
