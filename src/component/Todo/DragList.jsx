import React from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "./DraggableElement";
import {
  TASK_STATUS,
  API_ROUTE,
  API_URL,
  TASK_NAME,
} from "../../utils/constant";
import { useStore } from "../../Store/Store";
import { DeleteOutlined } from "@ant-design/icons";
import useToDo from "../../Hooks/useToDo";
import axios from "axios";

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

const addToList = async (list, destinationIndex, removedElement) => {
  console.log("add to list", list);
  await axios.put(`${API_URL}/${API_ROUTE.tasks}/${removedElement.id}`, {
    ...removedElement,
    stage: TASK_NAME[destinationIndex],
  });
  const result = Array.from(list);
  result.splice(destinationIndex, 0, removedElement);
  return result;
};

function DragList({ elements }) {
  const { isDragging, setIsDragging } = useStore();
  // const { setElements, generateLists, elements: elemTodo } = useToDo();

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
      result.destination.droppableId,
      removedElement
    );

    setIsDragging(false);

    // setElements(listCopy);
    // generateLists().then((res) => setElements(res));
  };
  const ondragstart = (res) => {
    setIsDragging(true);
  };

  return (
    <DragDropContextContainer>
      {isDragging && (
        <div className="bg-danger delete-task-fab pt-0 m-0">
          <DeleteOutlined className="text-light" />
        </div>
      )}
      <DragDropContext onDragStart={ondragstart} onDragEnd={onDragEnd}>
        <ListGrid>
          {TASK_STATUS.map((listKey) => {
            return (
              <DraggableElement
                elements={elements[listKey]}
                key={listKey}
                prefix={listKey}
                isDragging={isDragging}
              />
            );
          })}
        </ListGrid>
      </DragDropContext>
    </DragDropContextContainer>
  );
}

export default DragList;
