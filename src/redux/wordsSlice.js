import { createSlice } from "@reduxjs/toolkit";
import { data } from "../testData/data";
import { groups } from "../testData/groups";

const mainObj = {
  groups: {
    0: {
      groupName: "Минус слова",
      keys: [],
    },
    1: {
      groupName: "Необработанные ключи",
      keys: [...data],
    },
    2: {
      groupName: "Целевые слова",
      keys: [],
    },
  },
};

const initialState = {
  data: mainObj,
  groups: ["Минус слова", "Необработанные ключи", "Целевые слова"],
  activeArea: 1,
  activeWord: data[0].name,
};

export const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    changeGroup: (state, action) => {
      const { keyword, targetGroupId, groupId, targetGroupName } =
        action.payload;
      const movedKeyWord = { ...keyword };
      movedKeyWord.group = targetGroupName;
      const groupKeysAfterAdd = [
        ...state.data.groups[targetGroupId].keys,
        movedKeyWord,
      ];
      state.data.groups[targetGroupId].keys = groupKeysAfterAdd;
      const currentGroupKeys = state.data.groups[groupId].keys;

      const groupKeysAfterDelete = currentGroupKeys.filter(
        (item) => item.name !== movedKeyWord.name
      );
      state.data.groups[groupId].keys = groupKeysAfterDelete;
      state.activeWord = movedKeyWord.name;
    },
    setActiveArea(state, action) {
      state.activeArea = action.payload;
    },
    setActiveWord(state, action) {
      state.activeWord = action.payload;
    },
  },
});

export const { setActiveArea, setActiveWord, changeGroup } = wordsSlice.actions;

export default wordsSlice.reducer;
