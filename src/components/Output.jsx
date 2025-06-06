import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { LANGUAGE_VERSIONS } from "../utils/constants";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const executeCode = async (language, sourceCode) => {
    const response = await axios.post(
      "https://emkc.org/api/v2/piston/execute",
      {
        language: language,
        version: LANGUAGE_VERSIONS[language],
        files: [
          {
            content: sourceCode,
          },
        ],
      }
    );
    return response.data;
  };

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full bg-tertiary text-white">
      <button
        onClick={runCode}
        className="rounded-md px-4 py-2 font-medium text-white bg-success my-2 hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        Run Code
      </button>
      <div className="flex flex-col items-start w-full mt-4 px-2 py-4 space-y-2">
        {isLoading ? (
          <p className="text-sm font-mono text-gray-500">Running code...</p>
        ) : (
          output &&
          output.map((line, i) => (
            <p
              key={i}
              className={`text-sm font-mono ${
                isError ? "text-red-500" : "text-white"
              }`}
            >
              {line}
            </p>
          ))
        )}
      </div>
    </div>
  );
};
export default Output;
