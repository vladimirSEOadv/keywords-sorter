import React from "react";
import styles from "./WordWrapper.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveWord,
  changeGroup,
} from "../../redux/slices/wordsSlice/wordsSlice";
import { selectActiveWord } from "../../redux/slices/wordsSlice/selectors";

export const WordWrapper = ({ keyword, groupId }) => {
  const name = keyword.name;
  const groups = useSelector((state) => state.words.groups);
  const haveNext = groups.length > groupId + 1;
  const havePrev = groups.length && groupId > 0;

  const activeWord = useSelector(selectActiveWord);
  const classesForWord = `${name === activeWord ? styles.active : ""}`;
  const dispatch = useDispatch();

  return (
    <div className={styles.word} onClick={() => dispatch(setActiveWord(name))}>
      <button
        disabled={!havePrev}
        onClick={() => {
          dispatch(
            changeGroup({
              keyword,
              groupId,
              targetGroupId: groupId - 1,
              targetGroupName: groups[groupId - 1],
            })
          );
        }}
        className={`${styles.button} ${styles.buttonRight}`}
      >
        {"<"}
      </button>

      <div className={classesForWord}>{name}</div>

      <button
        disabled={!haveNext}
        onClick={() => {
          dispatch(
            changeGroup({
              keyword,
              groupId,
              targetGroupId: groupId + 1,
              targetGroupName: groups[groupId + 1],
            })
          );
        }}
        className={`${styles.button} ${styles.buttonLeft}`}
      >
        {">"}
      </button>
    </div>
  );
};
