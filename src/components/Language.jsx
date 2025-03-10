const LanguageSelector = ({ language, onSelect }) => {
  const LANGUAGE_VERSIONS = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
    java: "15.0.2",
    csharp: "6.12.0",
    php: "8.2.3",
  };
  const languages = Object.entries(LANGUAGE_VERSIONS);
  const ACTIVE_COLOR = "blue.400";

  return (
    <div className="flex space-x-4">
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
