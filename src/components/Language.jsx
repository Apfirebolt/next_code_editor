import { LANGUAGE_VERSIONS } from "../utils/constants";

const LanguageSelector = ({ language, onSelect }) => {
  
  const languages = Object.entries(LANGUAGE_VERSIONS);
  const ACTIVE_COLOR = "blue-400";

  console.log('LanguageSelector language:', language);

  return (
    <div className="flex space-x-4 my-3 py-2 bg-tertiary px-2 w-1/2 justify-center">
      {languages.map(([lang, version]) => {
        const isActive = language === lang;
        return (
          <button
            key={lang}
            className={`rounded-md px-4 py-2 text-md my-1 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75
              ${isActive ? "bg-danger text-white" : "bg-secondary text-gray-200 hover:tertiary"}
            `}
            onClick={() => onSelect(lang)}
          >
            {lang}
          </button>
        );
      })}
    </div>
  );
};
export default LanguageSelector;
