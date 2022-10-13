import React from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

const Wrapper = styled.li`
  background-color: rgb(226 232 240);
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
`;

const DeleteBtn = styled.button`
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding: 0.75rem;
  cursor: pointer;
  border: none;
`;

const Todo = () => {
  return (
    <Wrapper>
      <Row>
        <CheckBox />
        <Context>Learn English</Context>
      </Row>
      <DeleteBtn>
        <FaTrashAlt />
      </DeleteBtn>
    </Wrapper>
  );
};

export default Todo;
