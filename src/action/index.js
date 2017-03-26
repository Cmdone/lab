export const managerMixPageTo = payload => {
  return {
    type: 'MANAGER_MIX_PAGE_TO',
    payload
  };
};

export const deleteStruct = (flag, payload) => {
  return {
    type: 'DELETE_STRUCT',
    flag,
    payload
  };
};

export const addToStruct = (flag, payload) => {
  return {
    type: 'ADD_TO_STRUCT',
    flag,
    payload
  };
};

export const mixDetailChange = e => {
  return {
    type: 'MIX_DETAIL_CHANGE',
    payload: {
      name: e.target.name,
      value: e.target.value.trim()
    }
  };
};

export const setMixDetail = payload => {
  return {
    type: 'SET_MIX_DETAIL',
    payload
  };
};

export const changeRankFilter = payload => {
  return {
    type: 'CHANGE_RANK_FILTER',
    payload
  };
};

export const changeUserFilter = payload => {
  return {
    type: 'CHANGE_USER_FILTER',
    payload
  };
};

export const changeInOutTime = (time, type) => {
  return {
    type: 'CHANGE_INOUT_TIME',
    payload: {
      time,
      type
    }
  };
};

export const managerDrugPageTo = payload => {
  return {
    type: 'MANAGER_DRUG_PAGE_TO',
    payload
  };
};

export const deleteNewDrugLoc = () => {
  return {
    type: 'DELETE_NEW_DRUG_LOC'
  };
};

export const newDrugLoc = () => {
  return {
    type: 'NEW_DRUG_LOC'
  };
};

export const drugLocChange = (e) => {
  let value = e.target.value;
  if (e.target.name !== 'position') {
    value = Number(e.target.value.trim());
    if (isNaN(value) || value < 0) {
      value = 0;
    }
  }
  return {
    type: 'DRUG_LOC_CHANGE',
    payload: {
      inx: e.currentTarget.dataset.key,
      name: e.target.name,
      value
    }
  };
};

export const drugDetailChange = e => {
  return {
    type: 'DRUG_DETAIL_CHANGE',
    payload: {
      name: e.target.name,
      value: e.target.value.trim()
    }
  };
};

export const setDrugDetail = payload => {
  return {
    type: 'SET_DRUG_DETAIL',
    payload
  };
};

export const initReset = () => {
  return {
    type: 'INIT_RESET'
  };
};

export const logout = payload => {
  return {
    type: 'LOGOUT'
  };
};

export const personChange = payload => {
  return {
    type: 'SET_LOGIN_CHANGE',
    payload
  };
};

export const personForm = e => {
  return {
    type: 'CHANGE_LOGIN_DETAIL',
    payload: {
      name: e.target.name,
      value: e.target.value.trim()
    }
  };
};

export const changeSystemActive = payload => {
  return {
    type: 'CHANGE_SYSTEM_ACTIVE',
    payload
  };
};

export const navChangeTo = payload => {
  return {
    type: 'CHANGE_NAV',
    payload
  };
};

export const listingPageTo = payload => {
  return {
    type: 'CHANGE_PAGE',
    payload
  };
};

export const enterListing = payload => {
  return {
    type: 'ENTER_LISTING',
    payload
  };
};

export const enterSearch = () => {
  return {
    type: 'ENTER_SEARCH'
  };
};

export const searchPageTo = payload => {
  return {
    type: 'CHANGE_SEARCH_PAGE',
    payload
  };
};

export const tableViewTime = payload => {
  if (payload === 0) {
    return {
      type: 'RESET_TABLEVIEW_TIME'
    };
  }
  return {
    type: 'SET_TABLEVIEW_TIME',
    payload
  };
};

export const tablingTime = payload => {
  if (payload === 0) {
    return {
      type: 'RESET_TABLING_TIME'
    };
  }
  return {
    type: 'SET_TABLING_TIME',
    payload
  };
};
