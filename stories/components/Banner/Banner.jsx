/** @jsxImportSource @emotion/react */
import React from "react";
import PropsTypes from "prop-types";

const Banner = ({ variant = "info", children }) => {
  const variantStyles = {
    info: {
      borderLeft: "4px solid #b4aaff",
      backgroundColor: "rgba(224, 226, 255, 0.5)",
      color: "#2a2135",
      "&:before": { content: '"🔑"', backgroundColor: "#b4aaff" },
    },
    danger: {
      borderLeft: "4px solid #ff7828",
      backgroundColor: "rgb(253, 236, 234)",
      "&:before": { content: '"⚠️"', backgroundColor: "#ff7828" },
    },
    congrats: {
      borderLeft: "4px solid #72bc23",
      backgroundColor: "rgb(249, 253, 234)",
      "&:before": { content: '"🎉"', backgroundColor: "#72bc23" },
    },
    documentation: {
      borderLeft: "4px solid #44a9ba",
      backgroundColor: "rgb(234, 248, 253);",
      "&:before": { content: '"📚"', backgroundColor: "#44a9ba" },
    },
  };
  return <aside css={{ ...variantStyles[variant] }}> {children} </aside>;
};

Banner.propTypes = {
  variant: PropsTypes.string,
};

Banner.defaultProps = {
  variant: "info" | "congrats" | "documentation" | "danger",
};

export default Banner;
