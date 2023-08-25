import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "../../../testData/initialData";

const mainObj = {
  groups: {
    0: {
      groupName: "Минус слова",
      keys: [],
    },
    1: {
      groupName: "Необработанные ключи",
      keys: [...initialData],
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
  activeWord: initialData[0].name,
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

      state.data.groups[targetGroupId].keys = [
        ...state.data.groups[targetGroupId].keys,
        movedKeyWord,
      ];
      const currentGroupKeys = state.data.groups[groupId].keys;

      state.data.groups[groupId].keys = currentGroupKeys.filter(
        (item) => item.name !== movedKeyWord.name
      );
      state.activeWord = movedKeyWord.name;
    },
    setActiveArea(state, action) {
      state.activeArea = action.payload;
    },
    setActiveWord(state, action) {
      state.activeWord = action.payload;
    },
    addNewWords(state, action) {
      const { groupNumber, words } = action.payload;

      const wordsForAdding = [];
      words.forEach((word) => {
        wordsForAdding.push({
          name: word,
          group: state.data.groups[groupNumber].groupName,
        });
      });

      state.data.groups[groupNumber].keys =
        state.data.groups[groupNumber].keys.concat(wordsForAdding);
      console.log(
        "active word",
        wordsForAdding[wordsForAdding.length - 1].name
      );
      state.activeWord = wordsForAdding[wordsForAdding.length - 1].name;
    },
  },
});

export const { setActiveArea, setActiveWord, changeGroup, addNewWords } =
  wordsSlice.actions;

export default wordsSlice.reducer;
