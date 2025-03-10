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
      <main className="px-6">
        <div>
          <h1 className="text-4xl font-bold text-center text-white bg-tertiary my-2 py-2">
            CODE EDITOR
          </h1>
          <LanguageSelector language={language} onSelect={onSelect} />
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="col-span-1 bg-tertiary">
              <Editor
                options={{
                  minimap: {
                    enabled: false,
                  },
                }}
                height="75vh"
                theme="vs-dark"
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
