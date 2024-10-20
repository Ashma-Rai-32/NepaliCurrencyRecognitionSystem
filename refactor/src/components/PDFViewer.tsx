// src/components/PDFViewer.tsx

import React, { useState } from "react";
import {
  RenderPage,
  RenderPageProps,
  Viewer,
  Worker,
} from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Logo from "./Logo";

type PdfViewerProps = {
  fileUrl: string;
};

const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [numPages, setNumPages] = useState(0);

  // Custom toolbar component for page navigation
  const CustomToolbar = () => {
    const goToPreviousPage = () => {
      setPageIndex((prev) => Math.max(prev - 1, 0));
    };

    const goToNextPage = () => {
      setPageIndex((prev) => Math.min(prev + 1, numPages - 1));
    };

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          background: "#f0f0f0",
        }}
      >
        <button onClick={goToPreviousPage} disabled={pageIndex === 0}>
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {pageIndex + 1} of {numPages}
        </span>
        <button onClick={goToNextPage} disabled={pageIndex === numPages - 1}>
          Next
        </button>
      </div>
    );
  };

  const renderPage: RenderPage = (props: RenderPageProps) => (
    <>
      {props.canvasLayer.children}
      <div
        style={{
          alignItems: "center",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          left: 0,
          position: "absolute",
          top: 0,
          width: "100%",
        }}
      >
        <div
          style={{
            color: "rgba(0, 0, 0, 0.2)",
            fontSize: `${8 * props.scale}rem`,
            fontWeight: "bold",
            textTransform: "uppercase",
            transform: "rotate(-45deg)",
            userSelect: "none",
          }}
        >
          {/* {model.siglum} */}
          <Logo
          // className={css({
          //   background: "transparent",
          // })}
          />
        </div>
      </div>
      {props.annotationLayer.children}
      {props.textLayer.children}
    </>
  );

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
      >
        <CustomToolbar />
        <div
          style={{
            flex: 1,
            overflow: "auto",
          }}
        >
          <Viewer
            fileUrl={fileUrl}
            initialPage={pageIndex}
            onPageChange={({ currentPage }) => {
              setPageIndex(currentPage - 1);
            }}
            renderPage={renderPage}
            style={{ height: "100%" }}
          />
        </div>
      </Worker>
    </div>
  );
};

export default PdfViewer;
