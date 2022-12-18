import UserForm from './UserForm';
import { postUserInfo } from '../api/api';

const UserInformation = () => {
  const onSubmitHandler = (data) => {
    postUserInfo(data);
  };
  return (
    <>
      <UserForm onSubmitHandler={onSubmitHandler} />
    </>
  );
};

export default UserInformation;
