import React, { useState } from "react";
import { WorkArea } from "../components/WorkArea/WorkArea";
import styles from "./SorterPage.module.css";
import { useSelector } from "react-redux";

export const SorterPage = () => {
  const { data, groups } = useSelector((state) => state.words);

  return (
    <div className={styles.root}>
      {groups.map((group, index) => {
        return (
          <WorkArea
            key={group}
            title={group}
            groupId={index}
            words={data.groups[index].keys}
          />
        );
      })}
    </div>
  );
};
