import { LANGUAGE_VERSIONS } from "../utils/constants";

const LanguageSelector = ({ language, onSelect }) => {
  
  const languages = Object.entries(LANGUAGE_VERSIONS);
  const ACTIVE_COLOR = "blue-400";

  return (
    <div className="flex space-x-4 my-3 bg-slate-700">
      {languages.map(([lang, version]) => (
        <button
          key={lang}
          className={`rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 ${
            language === lang ? `bg-${ACTIVE_COLOR}` : ""
          }`}
          onClick={() => onSelect(lang)}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};
export default LanguageSelector;
