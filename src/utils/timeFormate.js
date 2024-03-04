export const formateDate = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleDateString();
};

export const formateTime = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleString().split(",")[1];
};
