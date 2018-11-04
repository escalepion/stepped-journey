import {
  ADD_BRAND_NAME,
  ADD_DESCRIBE_TEXT,
  CHANGE_PAGE_NUMBER,
  ADD_OBJECTIVE_TEXT,
  DELETE_OBJECTIVE
} from '../sagas/types';

const INITIAL_STATE = {
  brandName : '',
  describeText: '',
  objectives: [],
  pageNumber: 1
}

export default function( state=INITIAL_STATE, action ) {
  switch(action.type) {
    case ADD_BRAND_NAME:
      return { ...state, brandName: action.payload };
    case ADD_DESCRIBE_TEXT:
      return { ...state, describeText: action.payload };
    case CHANGE_PAGE_NUMBER:
      const newPageNumber = changePageNumber(action.payload, state.pageNumber);
      return { ...state, pageNumber: newPageNumber };
    case ADD_OBJECTIVE_TEXT:
      return { ...state, objectives: [...state.objectives, action.payload] };
    case DELETE_OBJECTIVE:
    const filteredObjectiveList = state.objectives.filter((objective, index) => index !== action.payload);
      return { ...state, objectives: filteredObjectiveList };
    default:
      return state;
  }
}

const changePageNumber = (operation, currentPageNumber) => {
  if (operation === 'DECREASE' && currentPageNumber !== 1) {
    currentPageNumber--;
    return currentPageNumber;
  }
  
  if(operation === 'INCREASE') {
    currentPageNumber++;
    return currentPageNumber++;
  }
}
