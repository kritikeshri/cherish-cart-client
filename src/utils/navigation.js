let navigateFunction = null;

export const setNavigate = (navigate) => {
  navigateFunction = navigate;
};

export const navigateTo = (path, timeout) => {
  if (navigateFunction) {
      setTimeout(() => {
          navigateFunction(path);
      },timeout);
  }
};