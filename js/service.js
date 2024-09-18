const url = "http://localhost:3600/";

export const getDatacatalog = async (name) => {
  try {
    const res = await fetch(`${url}${name}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error.message;
  }
};
export const getProduct = async (name, id) => {
  try {
    const res = await fetch(`${url}${name}/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error.message;
  }
};
