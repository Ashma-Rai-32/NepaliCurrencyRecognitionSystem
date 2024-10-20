import Card from "@/src/components/Card";

import Subtitle from "@/src/components/Subtitle";
import Title from "@/src/components/Title";

import { RootState } from "@reduxjs/toolkit/query";
import { connect } from "react-redux";
import { useRef, useState } from "react";
import axios from "axios";
import { model } from "@/src/store/constants";

// import "@react-pdf-viewer/core/lib/styles/index.css";
import PdfViewer from "@/src/components/PDFViewer";

const Model: React.FC = ({ theme }) => {
  const [file, setFile] = useState();
  const imageUrl = file && URL.createObjectURL(file);

  const [result, setResult] = useState();

  const classify = async () => {
    //classify the picture
    //trigger model here

    try {
      const formData = new FormData();
      formData.append("imagefile", file);
      const result = await axios.post("http://localhost:5000/", formData);
      setResult(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const variants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and slightly below
    visible: { opacity: 1, y: 0 }, // Fully visible at original position
  };

  return (
    <>
      <Card>
        <Title>{model.title}</Title>
        <Subtitle className="text-muted">{model.subtitle.p1}</Subtitle>
        <Subtitle className="text-muted">{model.subtitle.p2}</Subtitle>
      </Card>
      <Card>
        <PdfViewer fileUrl="/report.pdf" />
      </Card>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Model);
