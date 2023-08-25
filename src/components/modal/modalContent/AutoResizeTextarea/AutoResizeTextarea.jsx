import React, { useRef } from "react";
import styles from "./AutoResizeTextarea.module.css";

export const AutoResizeTextarea = ({ placeholder, value, setValue }) => {
  const textareaRef = useRef(null);
  const MAX_HEIGHT = 70;

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(
        textarea.scrollHeight,
        (MAX_HEIGHT * window.innerHeight) / 100
      )}px`;
    }
  };

  function onChangeHandler(e) {
    setValue(e.target.value);
  }

  return (
    <textarea
      onChange={onChangeHandler}
      value={value}
      ref={textareaRef}
      className={styles.auto_resize_textarea}
      placeholder={placeholder}
      onInput={handleInput}
    />
  );
};
