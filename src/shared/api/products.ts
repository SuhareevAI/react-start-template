import { serverUrl, commandToken } from '../../app/constants/Api';

export const getProducts = (pageSize: number, pageNumber: number) => {
  return fetch(
    serverUrl +
      `/products?${new URLSearchParams({
        pagination: JSON.stringify({
          pageSize: pageSize,
          pageNumber: pageNumber,
        }),
        sorting: JSON.stringify({ type: 'ASC', field: 'id' }),
      }).toString()}`,
    { headers: { Authorization: `Bearer ${commandToken}` } }
  ).then((response) => response.json());
};
