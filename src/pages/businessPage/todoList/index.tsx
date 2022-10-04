import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReIcon from '@/components/reIcon';
import RButton from '@/components/button';
import classNames from 'classnames/bind';
import style from './style/index.module.scss';
const cx = classNames.bind(style);

interface Todo {
  id: number;
  content: string;
  finished: boolean;
}
const TodoList = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [list, setList] = useState<Todo[]>([]);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const getNextId = () => {
    const ids = list.map((item) => item.id);
    return ids.length ? Math.max(...ids) + 1 : 0;
  };
  const handleAdd = () => {
    const nextId = getNextId();
    setList([...list, { id: nextId, content: input, finished: false }]);
    setInput('');
  };

  const handleFinished = (id: number) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          finished: true,
        };
      } else {
        return item;
      }
    });
    setList(newList);
  };

  const handleDelete = (id: number) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };
  return (
    <div>
      <ReIcon name="ri-arrow-left-line" size={24} color="#333" onClick={() => navigate(-1)} />
      <div className={cx('todolist')}>
        <h2 className={cx('todolist__title--center')}>TodoList</h2>
        <div className={cx('todolist__input')}>
          <div className={cx('todolist__input--box')} data-count={`${input.length}/10`}>
            <input type="text" value={input} onChange={handleOnChange} maxLength={10}></input>
          </div>
          <RButton disabled={!input.length} onClick={handleAdd}>
            Add
          </RButton>
        </div>
        <ul className={cx('todolist__ul')}>
          {list.map((item) => (
            <li key={item.id} className={cx({ finished: item.finished })}>
              <span>{item.content}</span>
              <div>
                <RButton size="small" type="success" disabled={item.finished} onClick={() => handleFinished(item.id)}>
                  finish
                </RButton>
                <RButton size="small" type="danger" onClick={() => handleDelete(item.id)}>
                  delete
                </RButton>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
