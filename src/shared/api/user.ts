import { serverUrl, commandId } from '../../app/constants/Api';

//Получить данные профиля
export const getProfile = (token: string) => {
  return fetch(serverUrl + `/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then((response) => response.json());
};

export type Credential = {
  email: string;
  password: string;
};

//Регистрация нового пользователя
export const signup = async ({ email, password }: Credential) => {
  const response = await fetch(serverUrl + `/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, commandId }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors[0].message.toString());
  }

  return await response.json();
};
