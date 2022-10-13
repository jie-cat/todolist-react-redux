import React from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

const Wrapper = styled.li`
  background-color: ${(props) =>
    props.isCompleted ? "rgb(148 163 184)" : "rgb(226 232 240)"};
  display: flex;
  justify-content: space-between;
  margin: 0.75rem 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  flex-grow: 1;
`;

const CheckBox = styled.input.attrs({ type: "checkbox" })`
  cursor: pointer;
`;

const Context = styled.p`
  margin-left: 0.5rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  flex-grow: 1;
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
`;

const DeleteBtn = styled.button`
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding: 0.75rem;
  cursor: pointer;
  border: none;
`;

const Todo = ({ context, isCompleted, idx }) => {
  // update todo for toggle
  const dispatch = useDispatch();
  const toggleTodo = () => {
    dispatch({
      type: "UPDATE_TODO",
      idx: idx,
    });
  };
  // delete todo
  const deleteTodo = () => {
    dispatch({
      type: "DELETE_TODO",
      idx: idx,
    });
  };

  return (
    <Wrapper isCompleted={isCompleted}>
      <Row>
        <CheckBox checked={isCompleted} onChange={() => toggleTodo()} />
        <Context isCompleted={isCompleted}>{context}</Context>
      </Row>
      <DeleteBtn>
        <FaTrashAlt onClick={() => deleteTodo()} />
      </DeleteBtn>
    </Wrapper>
  );
};

export default Todo;
