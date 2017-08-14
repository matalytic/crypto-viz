export default function (state = {}, action) {
  switch (action.type) {
    case 'FETCH_GRAPH_DATA':
      const fromType = action.meta.fromType;
      const newGraphData = action.payload.data.Data.map(day => day.close);
      const newGraphDataObj = { [fromType]: newGraphData };
      return Object.assign({}, state, newGraphDataObj);
  }
  return state;
}
