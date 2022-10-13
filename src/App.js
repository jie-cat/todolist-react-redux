import React from "react";
import { IoMdAdd } from "react-icons/io";
import styled from "styled-components";
// Components
import Todo from "./components/Todo";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #9ed9ccff;
  padding: 1rem;
`;

const Container = styled.div`
  background-color: rgb(241 245 249);
  max-width: 576px;
  margin: auto;
  border-radius: 0.5rem;
  padding: 1.25rem;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  line-height: 2.5rem;
  text-align: center;
  padding: 0.5rem 0;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
`;

const Input = styled.input.attrs({ type: "text" })`
  width: 100%;
  padding: 1.25rem 0.5rem;
  outline: none;
  font-size: 1.25rem;
  line-height: 1.75rem;
  border: none;
`;

const AddBtn = styled.button`
  padding: 1rem;
  background-color: #008c76ff;
  margin-left: 0.75rem;
  color: rgb(241 245 249);
  border: none;
`;

function App() {
  return (
    <Wrapper>
      <Container>
        <Title>Todo App</Title>
        <Form>
          <Input />
          <AddBtn>
            <IoMdAdd size={30} />
          </AddBtn>
        </Form>
        {/* TodoList container */}
        <ul>
          <Todo />
          <Todo />
          <Todo />
        </ul>
      </Container>
    </Wrapper>
  );
}

export default App;
