import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PdfViewer = ({ url }) => {
  return (
    <Worker workerUrl={process.env.REACT_APP_PDF_WORKER_URL}>
      <div className="viewer">
        <Viewer fileUrl={url} />
      </div>
    </Worker>
  );
};

export default PdfViewer;
