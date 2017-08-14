export default function (state = [], action) {
  switch (action.type) {
    case 'FETCH_ALL_CURRENCIES':
    // console.log('payload ', action.payload);
      return [...action.payload.data];
  }
  return state;
}
