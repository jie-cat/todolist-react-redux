const initialState = [
  { task: "Learn English", isCompleted: false },
  { task: "Learn React", isCompleted: false },
  { task: "Learn Redux", isCompleted: true },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
