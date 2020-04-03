import React from 'react';
import OPERATIONS from '/constants/operations';
import DIAGNOSIS from '/constants/diagnosis';
import TREATMENTS from '/constants/treatments';
import { ODONTOGRAM_TYPES } from '/constants/odontogram';

const initialState = {
  status: {
    value: '',
    title: '',
  },
  tab: 0,
  odontogram: ODONTOGRAM_TYPES.length,
  tooth: {
    name: 'xxxx',
    nomenclature: 'XX',
    quadrant: 'X',
    surface: 'X',
  },
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'status':
      return { ...state, status: action.status };
    case 'tab':
      return {
        ...state,
        status: initialState.status,
        tooth: initialState.tooth,
        tab: action.tab,
      };
    case 'odontogram':
      return { ...state, odontogram: action.odontogram };
    case 'tooth':
      return { ...state, tooth: action.tooth };
    default:
      throw new Error(`That action type isn't supported.`);
  }
};
const OdontogramContext = React.createContext(initialState);

const OdontogramContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <OdontogramContext.Provider value={[state, dispatch]}>
      {children}
    </OdontogramContext.Provider>
  );
};

export { OdontogramContextProvider, OdontogramContext as default };
