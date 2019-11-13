import React, { useState } from 'react';
import { useMutation } from 'react-apollo';
import LOGIN from '../../graphql/mutations/login';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    identifier: 'test@test.fr',
    password: 'hello'
  });
  const [login] = useMutation(LOGIN);

  const onSubmit = (event: EventTarget): Function => {
    event.preventDefault();
    login({
      variables: formData
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        name="identifier"
        id="identifier"
        value={formData.identifier}
        onChange={({ target }: EventTarget): Function =>
          setFormData({ ...formData, identifier: target.value })
        }
      />
      <input
        type="password"
        name="password"
        id="password"
        value={formData.password}
        onChange={({ target }: EventTarget): Function =>
          setFormData({ ...formData, password: target.value })
        }
      />
      <button type="submit">login</button>
    </form>
  );
};

export default LoginForm;
