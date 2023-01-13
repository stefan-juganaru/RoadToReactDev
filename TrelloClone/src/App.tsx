import { useState } from "react";
import { Column } from "./Column";
import { AppContainer } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/actions";

function App() {
  const { lists, dispatch } = useAppState();
  return (
    <AppContainer>
      {lists.map((list, i) => (
        <Column text={list.text} key={list.id} id={list.id}></Column>
      ))}
      <AddNewItem
        toggleButtonText="+ Add another List"
        onAdd={(text) => dispatch(addList(text))}
      ></AddNewItem>
    </AppContainer>
  );
}

export default App;
