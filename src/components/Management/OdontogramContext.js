import React from 'react';
import { ODONTOGRAM_TYPES } from '/constants/odontogram';

const initialState = {
  status: {
    value: '',
    title: '',
  },
  error: '',
  tab: 0,
  types: ODONTOGRAM_TYPES.length,
  tooth: {
    name: 'xxxx',
    nomenclature: 'XX',
    quadrant: 'X',
    surface: 'X',
  },
  odontogram: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'status':
      return { ...state, status: action.status, error: '' };
    case 'no-chosen':
      return { ...state, error: action.error || "There's an error" };
    case 'tab':
      return {
        ...state,
        status: initialState.status,
        tooth: initialState.tooth,
        tab: action.tab,
        odontogram: {},
        error: '',
      };
    case 'types':
      return { ...state, error: '', types: action.types, odontogram: {} };
    case 'odontogram':
      return { ...state, odontogram: state.odontogram };
    case 'tooth':
      return { ...state, tooth: action.tooth };
    case 'clear':
      return { ...state, error: '', odontogram: initialState.odontogram };
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
