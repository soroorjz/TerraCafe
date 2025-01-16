// const direction = localStorage.getItem("i18nextLng");
const rightDirs = ["fa", "ar"];

export const cheackDir = (dir) => {
  if (rightDirs.includes(dir)) {
    return true;
  } else {
    return false;
  }
};
