import { useTranslation } from "react-i18next";
import { cheackDir } from "./cheackDir";

const GetText = (section) => {
  const { t, i18n } = useTranslation();
  const { ...other } = t(section);
  const dir = cheackDir(i18n.language);
  return { ...other, dir };
};

export default GetText;
