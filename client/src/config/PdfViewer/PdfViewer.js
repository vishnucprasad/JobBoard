import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PdfViewer = ({ url, viewerClassName }) => {
  return (
    <Worker workerUrl={process.env.REACT_APP_PDF_WORKER_URL}>
      <div className={viewerClassName}>
        <Viewer fileUrl={url} />
      </div>
    </Worker>
  );
};

export default PdfViewer;
