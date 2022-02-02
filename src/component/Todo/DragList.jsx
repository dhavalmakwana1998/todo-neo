import React from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "./DraggableElement";
import { TASK_STATUS } from "../../utils/constant";

const DragDropContextContainer = styled.div`
  border-radius: 6px;
`;

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 6px;
`;

const removeFromList = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list, index, element) => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

function DragList() {
  const [elements, setElements] = React.useState({
    [TASK_STATUS[0]]: [
      {
        id: Math.floor(Math.random() * 1000),
        name: "Task 1",
        stage: 0,
        dueDate: "2022-04-02",
        priority: 0,
        prefix: TASK_STATUS[0],
      },
      {
        id: Math.floor(Math.random() * 1000),
        name: "Task 1",
        stage: 0,
        dueDate: "2022-04-02",
        priority: 0,
        prefix: TASK_STATUS[0],
      },
    ],
    [TASK_STATUS[1]]: [
      {
        id: Math.floor(Math.random() * 1000),
        name: "Task 2",
        stage: 1,
        dueDate: "2022-04-02",
        priority: 1,
        prefix: TASK_STATUS[1],
      },
      {
        id: Math.floor(Math.random() * 1000),
        name: "Task 2",
        stage: 1,
        dueDate: "2022-04-02",
        priority: 1,
        prefix: TASK_STATUS[1],
      },
    ],
    [TASK_STATUS[2]]: [
      {
        id: Math.floor(Math.random() * 1000),
        name: "DM 2",
        stage: 2,
        dueDate: "2021-01-02",
        priority: 2,
        prefix: TASK_STATUS[1],
      },
    ],
    [TASK_STATUS[3]]: [
      {
        id: Math.floor(Math.random() * 1000),
        name: "DM 3",
        stage: 3,
        dueDate: "2021-01-02",
        priority: 2,
        prefix: TASK_STATUS[1],
      },
    ],
  });

  const onDragEnd = (result) => {
    console.log("result", result.destination);
    if (!result.destination) {
      return;
    }
    const listCopy = { ...elements };

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setElements(listCopy);
  };

  return (
    <DragDropContextContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <ListGrid>
          {TASK_STATUS.map((listKey) => {
            return (
              <DraggableElement
                elements={elements[listKey]}
                key={listKey}
                prefix={listKey}
              />
            );
          })}
        </ListGrid>
      </DragDropContext>
    </DragDropContextContainer>
  );
}

export default DragList;
