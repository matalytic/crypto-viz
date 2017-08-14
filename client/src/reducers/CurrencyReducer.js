export default function (state = [], action) {
  switch(action.type) {
    case 'FETCH_CURRENCY':
      return [...action.payload.data, ...state];
    }
  return state;
}