import { Helmet } from 'react-helmet-async';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Phonebook - Register</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
