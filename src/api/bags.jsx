import axios from "axios";

export const getBagsRequests = async () =>
  await axios.get("http://localhost:4000/bag");

export const createBagRequest = async (bag) => {
const form = new FormData();

for (let key in bag){
  form.append(key, bag[key])
}

  return await axios.post("http://localhost:4000/bag/", form, {
    headers: {
        "Content-Type": "multipart/form-data",
    } 
  });
}

export const removeBagRequest = async (id) =>
  await axios.delete("http://localhost:4000/bag/" + id);

export const getBagRequest = async (id) =>
  await axios.get("http://localhost:4000/bag/" + id);

export const updateBagRequest = async (id, updateFields) =>
  await axios.put(`http://localhost:4000/bag/${id}`, updateFields);
