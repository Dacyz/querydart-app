"use client";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import CodeEditor from "@uiw/react-textarea-code-editor";
import React from "react";
import ConvertModal from "../modals/convert-modal";
import { useDashboardContext } from "@/context/context";
import LineSeparator from "./line-separator";

const ConvertSection: React.FC = () => {
  const { responseModel } = useDashboardContext();
  if (responseModel === null) {
    return (
      <></>
    );
  }
  return (
    <>
      <LineSeparator />

      <div className="min-w-[560px] gap-4 max-w-[560px] flex flex-col h-full">
        <div className="flex items-center">
          <ConvertModal />
          <input
            className="w-full input-text"
            placeholder="Enter classname"
            aria-controls=":rq:"
            aria-labelledby=":rr:"
            type="text"
          ></input>
          <button className="button flex rounded-r-2xl">Convert</button>
        </div>
        <CodeEditor
          //         value={`
          // class ApiConstants {
          //   ///Constant
          //   static const int timeOutSeconds = 75;
          //   /// Ambientes:
          //   /// - CELER: "https://10.10.1.114:8080"
          //   /// - DEV: "https://x.spiralia-team.com"
          //   static const String NBaseServer = "https://x.aplicacion-team.com";
          //   static late final NConfigModel config;
          //   static Uri toUri(String path) => Uri.parse(config.toApi(path));
          //   static Uri uri({
          //     required String path,
          //     Map<String, dynamic>? queryParameters,
          //   }) =>
          //     Uri(
          //       scheme: 'https',
          //       host: 'x.aplicacion-team.com',
          //       path: path,
          //       queryParameters: queryParameters,
          //     );
          // }`}
          onChange={() => false}
          language="dart"
          data-color-mode="dark"
          placeholder="Please enter Classname for generate Dart code."
          contentEditable={false}
          disabled
          padding={16}
          style={{
            fontSize: 12,
            backgroundColor: "#1E1E1E",
            borderRadius: "16px",
            overflow: "auto",
            flexGrow: "1",
            width: "100%",
            resize: "none",
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          }}
        />
        <button className="button w-full rounded-2xl">
          {" "}
          <CopyAllIcon /> Copy
        </button>
      </div>
    </>
  );
};

export default ConvertSection;
