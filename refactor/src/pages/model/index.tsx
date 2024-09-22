import LogoFirstLetter from "@/src/assets/logo-first-letter";
import Button from "@/src/components/Button";
import Card from "@/src/components/Card";
import CardOverlapped from "@/src/components/CardOverlapped";
import Heading1 from "@/src/components/Heading1";
import Logo from "@/src/components/Logo";
import IconButtonGroup from "@/src/components/IconButtonGroup";
import Subtitle from "@/src/components/Subtitle";
import Title from "@/src/components/Title";
import TypographicList from "@/src/components/TypographicList";
import { css } from "@emotion/css";
import { RootState } from "@reduxjs/toolkit/query";
import { connect } from "react-redux";
import { BsPlusLg } from "react-icons/bs";
import Footer from "@/src/components/Footer";
import { RiCamera3Fill, RiSearchFill } from "react-icons/ri";
import classNames from "classnames";
import ImageThumbnail from "@/src/assets/image-thumbnail";
import { IoVolumeLow } from "react-icons/io5";
import StatisticsTile from "@/src/components/StatisticsTile";
import DropdownSimpleField from "@/src/components/DropdownSimpleField";
import { useRef, useState } from "react";
import CardInput from "@/src/components/CardInput";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";

const Model: React.FC = ({ theme }) => {
  console.log("👾 | theme:", theme);
  const fileInputRef = useRef(null);
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

  return <>model here</>;
};

const mapStateToProps = (state: RootState) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Model);
