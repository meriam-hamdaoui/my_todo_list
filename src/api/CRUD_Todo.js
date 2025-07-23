export const getTodos = (fonction) => {
  fetch(`${import.meta.env.VITE_MOCKAPI_BASE_URL}/todos`, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((response) => !!response.ok && response.json())
    .then(fonction);
};
