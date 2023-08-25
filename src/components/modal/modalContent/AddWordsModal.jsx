import React, { useState } from "react";
import { useModalContext } from "../modalContextProvider/ModalContextProvider";
import styles from "./ModalContent.module.css";
import { AutoResizeTextarea } from "./AutoResizeTextarea/AutoResizeTextarea";
import { useDispatch, useSelector } from "react-redux";
import { addNewWords } from "../../../redux/slices/wordsSlice/wordsSlice";
import {
  selectActiveArea,
  selectAllWords,
} from "../../../redux/slices/wordsSlice/selectors";

export const AddWordsModal = () => {
  const { changeModalStatus } = useModalContext();
  const [modalValue, setModalValue] = useState("");
  const closeModalHandler = () => changeModalStatus(false);
  const dispatch = useDispatch();
  const activeArea = useSelector(selectActiveArea);
  const allWordsInStore = useSelector(selectAllWords);

  function saveBtnHandler(str) {
    const arrOfWords = str.split("\n");
    const removeDuplicateArr = [...new Set(arrOfWords)];
    const removeEmptyStringAndDuplicatesInStore = removeDuplicateArr.filter(
      (word) => word !== "" && !allWordsInStore.includes(word)
    );
    if (!removeEmptyStringAndDuplicatesInStore.length) {
      alert("Нет новых слов для добавления");
      return;
    }
    dispatch(
      addNewWords({
        groupNumber: activeArea,
        words: removeEmptyStringAndDuplicatesInStore,
      })
    );
    setModalValue("");
    changeModalStatus(false);
  }

  return (
    <div className={styles.modalWrapper}>
      <header className={styles.textArea__header}>
        <div className={styles.textArea__header_title}>Add new words</div>
        <button
          className={styles.textArea__close_btn}
          onClick={closeModalHandler}
        >
          X
        </button>
      </header>

      <AutoResizeTextarea
        placeholder={"Введите ключевые слова"}
        value={modalValue}
        setValue={setModalValue}
      />
      <div className={styles.textArea__footer}>
        <button
          onClick={() => saveBtnHandler(modalValue)}
          className={styles.textArea__save_btn}
        >
          Save ✔
        </button>
      </div>
    </div>
  );
};
