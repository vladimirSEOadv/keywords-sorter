import React from "react";
import { WorkArea } from "../components/WorkArea/WorkArea";
import styles from "./SorterPage.module.css";
import { useSelector } from "react-redux";
import {
  selectAllData,
  selectAllGroups,
} from "../redux/slices/wordsSlice/selectors";

export const SorterPage = () => {
  const data = useSelector(selectAllData);
  const groups = useSelector(selectAllGroups);

  return (
    <div className={styles.sorter_page_container}>
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
