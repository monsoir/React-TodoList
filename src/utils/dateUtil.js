const currentDateString = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDay();
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();

  return `${year}-${month}-${day}-${hour}-${minute}-${second}`;
};

export {
  currentDateString,
};
