const initialState = [
  { task: "Learn English", isCompleted: false },
  { task: "Learn React", isCompleted: false },
  { task: "Learn Redux", isCompleted: true },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { task: action.task, isCompleted: false }];
    case "UPDATE_TODO":
      let newState = [...state];
      newState[action.idx].isCompleted = !newState[action.idx].isCompleted;
      return newState;
    default:
      return state;
  }
}
