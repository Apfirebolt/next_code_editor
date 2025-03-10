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
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center text-red-700">
            Technologies used to build this app
          </h1>
          <LanguageSelector language={language} onSelect={onSelect} />
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

        <Output editorRef={editorRef} language={language} />  
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
