import React from "react";
import styles from "./WordWrapper.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setActiveWord, changeGroup } from "../../redux/wordsSlice"; //

export const WordWrapper = ({ keyword, groupId }) => {
  const name = keyword.name;
  const groups = useSelector((state) => state.words.groups);
  const haveNext = groups.length > groupId + 1;
  const havePrev = groups.length && groupId > 0;

  const { activeWord } = useSelector((state) => state.words);
  const classes = `${name === activeWord ? styles.active : ""}`;
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

      <div className={classes}>{name}</div>

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
