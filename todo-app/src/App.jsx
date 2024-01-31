import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtodo, removetodo, editodo } from './config/reduxconfig/reducers/todoslice';
import { nanoid } from '@reduxjs/toolkit';

const App = () => {
  const todoval = useRef();
  const editval = useRef();
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.todo);

  const addtodoval = (e) => {
    e.preventDefault();
    console.log(todoval.current.value);
    dispatch(
      addtodo({
        title: todoval.current.value,
        id: nanoid(),
      })
    );
    console.log(selector);
    todoval.current.value = '';
  };

  const deltodo = (index) => {
    dispatch(removetodo({ index: index }));
  };

  const editodo = (index) => {
    setEdit(true);
    setEditIndex(index);
  };

  const saveedit = (e, index) => {
    e.preventDefault();
    console.log(editval.current.value,index);
    dispatch(
      editodo({
        index:index,
        title: editval.current.value,
      })
    );
    setEdit(false);
    setEditIndex(null);
  };

  return (
    <>
      {!edit ? (
        <form onSubmit={addtodoval}>
          <input type="text" placeholder="Enter todo" ref={todoval} />
          <button type="submit">add todo</button>
        </form>
      ) : (
        <div>
          <form onSubmit={()=>saveedit(index)}>
            <input type="text" placeholder="edit value" ref={editval} />
            <button type="submit">save</button>
          </form>
        </div>
      )}

      <ul>
        {selector.map((item, index) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => deltodo(index)}>delete</button>
            <button onClick={() => editodo(index)}>edit</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
