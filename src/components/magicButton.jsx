import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  up: {
    opacity: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    y: [0, -3, -5, -7, -10, -5, 0, 5, 10, 7, 3, 0],
  },
  show: { opacity: 1, y: 0 },
};

const magicButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.button
      style={{
        display: "inline-block",
        position: "relative",
        background: "none",
        borderColor: props.mainBorderColor || "#646cff",
        borderRadius: "30px",
        color: "#fff",
        fontSize: parseInt(props.textFontSize) || 30,
        cursor: "pointer",
      }}
      whileHover={{
        borderBottomColor: [
          props.mainBorderColor || "#646cff",
          props.effectBorderColor || "#0f0",
          props.mainBorderColor || "#646cff",
          props.mainBorderColor || "#646cff",
          props.mainBorderColor || "#646cff",
          props.mainBorderColor || "#646cff",
        ],
        borderLeft: [
          props.mainBorderColor || "#646cff",
          props.mainBorderColor || "#646cff",
          props.effectBorderColor || "#0f0",
          props.mainBorderColor || "#646cff",
          props.mainBorderColor || "#646cff",
          props.mainBorderColor || "#646cff",
        ],
        borderTopColor: [
          props.mainBorderColor || "#646cff",
          props.mainBorderColor || "#646cff",
          props.mainBorderColor || "#646cff",
          props.effectBorderColor || "#0f0",
          props.mainBorderColor || "#646cff",
          props.mainBorderColor || "#646cff",
        ],
        borderRightColor: [
          props.mainBorderColor || "#646cff",
          props.mainBorderColor || "#646cff",
          props.mainBorderColor || "#646cff",
          props.mainBorderColor || "#646cff",
          props.effectBorderColor || "#0f0",
          props.mainBorderColor || "#646cff",
        ],
        borderWidth: ["1px", "1px"],
        borderStyle: ["solid", "solid"],
        transition: {
          duration: props.borderEffectDuration || 2,
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          ease: "easeInOut",
        },
      }}
      onHoverStart={() => setIsOpen(!isOpen)}
      onHoverEnd={() => setIsOpen(!isOpen)}
    >
      <motion.span
        animate={isOpen ? "up" : "show"}
        transition={{ duration: props.textTransitionDuration || 1 }}
        variants={variants}
      >
        {props.text}
      </motion.span>
    </motion.button>
  );
};

export default magicButton;
