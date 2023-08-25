export const selectAllData = (state) => state.words.data;

export const selectAllGroups = (state) => state.words.groups;

export const selectActiveArea = (state) => state.words.activeArea;

export const selectActiveWord = (state) => state.words.activeWord;

export const selectAllWords = (state) => {
  function getAllGroupKeys(data) {
    const groupKeys = [];
    for (const groupId in data.groups) {
      groupKeys.push(...data.groups[groupId].keys);
    }
    return groupKeys.reduce((acc, current) => {
      acc.push(current.name);
      return acc;
    }, []);
  }

  return getAllGroupKeys(state.words.data);
};
