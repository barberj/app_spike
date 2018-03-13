export default ({ path, method, body }) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const bodyJson = JSON.stringify(body);
  const baseUrl = "http://localhost:4000/api";

  console.log(path);
  return fetch(
    `${baseUrl}/${path}`,
    { method, headers, body: bodyJson },
  )
    .then(response => response.json());
};
