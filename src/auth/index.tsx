//isLoggedin=> localstorage

export const isLoggedIn = () => {
  const data = localStorage.getItem("data");
  if (data == null) {
    return false;
  } else {
    return true;
  }
};

//doLogin=> store jwt in localstorage

export const doLogin = (data: string, next: () => void) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();
};

//doLogout => remove fjwt from local storage

export const doLogout = (next: () => void) => {
  localStorage.removeItem("data");
  next();
};

//get currentUser

export const getCurrentUserDetail = () => {
  if (isLoggedIn()) {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      return parsedData.userDto;
    }
  }
  return null;
};
