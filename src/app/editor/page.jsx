"use client";

import { Fragment, useState, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Output from "../../components/Output";
import LanguageSelector from "../../components/Language";
import { CODE_SNIPPETS } from "../../utils/constants";

export default function About() {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [themes, setThemes] = useState([
    "vs-dark",
    "hc-black",
    "light",
    "dark",
    "hc-light",
  ]);
  const [theme, setTheme] = useState("vs-dark");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Fragment>
      <Header />
      <main className="px-2">
        <div>
          <div className="flex items-center gap-4">
            <label htmlFor="theme-select" className="font-medium">
              Theme:
            </label>
            <select
              id="theme-select"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="border rounded px-2 py-1 bg-white text-black"
            >
              {themes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <LanguageSelector language={language} onSelect={onSelect} />
          </div>
          
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="col-span-1 bg-tertiary">
              <Editor
                options={{
                  minimap: {
                    enabled: false,
                  },
                }}
                height="75vh"
                theme={theme}
                language={language}
                defaultValue={CODE_SNIPPETS[language]}
                onMount={onMount}
                value={value}
                onChange={(value) => setValue(value)}
              />
            </div>
            <div className="col-span-1">
              <Output editorRef={editorRef} language={language} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
