import React, { useState } from "react";
import { WordWrapper } from "../WordWrapper/WordWrapper";
import styles from "./WorkArea.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setActiveArea } from "../../redux/wordsSlice";
import { current } from "@reduxjs/toolkit";

export const WorkArea = ({ title, groupId, words }) => {
  const [search, setSearch] = useState("");
  const wordsLength = words.length;
  const { activeArea } = useSelector((state) => state.words);
  const dispatch = useDispatch();
  return (
    <div
      className={`${styles.workArea} ${
        activeArea === groupId ? styles.active : ""
      }`}
      onClick={() => dispatch(setActiveArea(groupId))}
    >
      <div>
        <div className={styles.header}>
          <h5>{title}</h5>
          <div className={styles.counter}>Слов: {wordsLength}</div>
        </div>
        <div className={styles.search}>
          <div>
            <input
              value={search}
              placeholder={"Поиск"}
              onChange={(e) => setSearch(() => e.target.value)}
              className={styles.search__input}
              type="text"
            />
          </div>
          {search && (
            <p
              className={styles.clearSearchButton}
              onClick={() => setSearch("")}
            >
              ❌
            </p>
          )}
        </div>
      </div>
      <div className={styles.keywordsSection}>
        {words
          .filter((item) => item.name.includes(search))
          .map((item) => {
            return (
              <WordWrapper groupId={groupId} key={item.name} keyword={item} />
            );
          })}
      </div>
      <button className={styles.addNewButton}>Add new</button>
    </div>
  );
};
