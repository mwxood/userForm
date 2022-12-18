import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import UserInformation from './Components/UserInformation';
import UserForm from './Components/UserForm';

describe(UserInformation, () => {
  it('If inputs exist', () => {
    render(<UserInformation />);
    const userName = screen.getByTestId('userName');
    const userEmail = screen.getByTestId('userEmail');
    const userPassword = screen.getByTestId('userPassword');
    const userDate = screen.getByTestId('userDate');
    const userTel = screen.getByTestId('userTel');
    const userFile = screen.getByTestId('userFile');
    const userAge = screen.getByTestId('userAge');
    const userUrl = screen.getByTestId('userUrl');
    const userMessage = screen.getByTestId('userMessage');
    expect(userName).toBeInTheDocument();
    expect(userEmail).toBeInTheDocument();
    expect(userPassword).toBeInTheDocument();
    expect(userDate).toBeInTheDocument();
    expect(userTel).toBeInTheDocument();
    expect(userFile).toBeInTheDocument();
    expect(userAge).toBeInTheDocument();
    expect(userUrl).toBeInTheDocument();
    expect(userMessage).toBeInTheDocument();
  });
});

describe('Form', () => {
  it('Should to submit data', async () => {
    const onSubmitHandler = jest.fn();
    render(<UserForm onSubmitHandler={onSubmitHandler} />);

    fireEvent.change(screen.getByTestId('userName'), {
      target: { value: 'test' },
    });
    fireEvent.change(screen.getByTestId('userEmail'), {
      target: { value: 'test@abv.bg' },
    });
    fireEvent.change(screen.getByTestId('userPassword'), {
      target: { value: 'test123456' },
    });
    fireEvent.change(screen.getByTestId('userDate'), {
      target: { value: '2022-12-17' },
    });
    fireEvent.change(screen.getByTestId('userTel'), {
      target: { value: '0899999999' },
    });

    fireEvent.change(screen.getByTestId('userAge'), {
      target: { value: '111' },
    });
    fireEvent.change(screen.getByTestId('userUrl'), {
      target: {
        value: 'https://test.com',
      },
    });
    fireEvent.change(screen.getByTestId('userMessage'), {
      target: { value: 'message' },
    });

    fireEvent.submit(screen.getByTestId('button-submit'));

    await waitFor(() => {
      expect(onSubmitHandler).toBeCalled();
    });
  });
});

describe('<UserForm  />', () => {
  it('Check form for required inputs', async () => {
    const onSubmitHandler = jest.fn();
    render(<UserForm onSubmitHandler={onSubmitHandler} />);

    fireEvent.submit(screen.getByTestId('button-submit'));

    await waitFor(() => {
      expect(screen.getByTestId('userName')).toHaveClass('error');
    });

    await waitFor(() => {
      expect(screen.getByTestId('userEmail')).toHaveClass('error');
    });

    await waitFor(() => {
      expect(screen.getByTestId('userPassword')).toHaveClass('error');
    });

    await waitFor(() => {
      expect(screen.getByTestId('userDate')).toHaveClass('error');
    });

    await waitFor(() => {
      expect(screen.getByTestId('userTel')).toHaveClass('error');
    });

    await waitFor(() => {
      expect(screen.getByTestId('userAge')).toHaveClass('error');
    });

    await waitFor(() => {
      expect(screen.getByTestId('userUrl')).toHaveClass('error');
    });

    await waitFor(() => {
      expect(screen.getByTestId('userMessage')).toHaveClass('error');
    });
  });
});

describe('Form data', () => {
  it('Should to submit correct data', async () => {
    const onSubmitHandler = jest.fn();
    render(<UserForm onSubmitHandler={onSubmitHandler} />);

    fireEvent.change(screen.getByTestId('userName'), {
      target: { value: 'test' },
    });
    fireEvent.change(screen.getByTestId('userEmail'), {
      target: { value: 'test@abv.bg' },
    });
    fireEvent.change(screen.getByTestId('userPassword'), {
      target: { value: 'test123456' },
    });
    fireEvent.change(screen.getByTestId('userDate'), {
      target: { value: '2022-12-17' },
    });
    fireEvent.change(screen.getByTestId('userTel'), {
      target: { value: '0899999999' },
    });

    fireEvent.change(screen.getByTestId('userAge'), {
      target: { value: '111' },
    });
    fireEvent.change(screen.getByTestId('userUrl'), {
      target: {
        value: 'https://test.com',
      },
    });
    fireEvent.change(screen.getByTestId('userMessage'), {
      target: { value: 'message' },
    });

    fireEvent.submit(screen.getByTestId('button-submit'));

    await waitFor(() => {
      expect(onSubmitHandler).toHaveBeenCalledWith({
        userName: 'test',
        userEmail: 'test@abv.bg',
        userPassword: 'test123456',
        userFile: null,
        userDate: '2022-12-17',
        userTel: '0899999999',
        userAge: 111,
        userUrl: 'https://test.com',
        userMessage: 'message',
      });
    });
  });
});
