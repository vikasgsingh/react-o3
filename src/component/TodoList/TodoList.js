import { useEffect, useState } from 'react';
import './TodoList.css'

  // get data form localStorage
  const localdata=(()=>{
      const localdata=localStorage.getItem('list')
      if(localdata){
        return JSON.parse(localStorage.getItem('list'))
      }
  })

const TodoList = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState(localdata());
  const [index, setIndex] = useState([])

  const getName = (e) => {
    setName(e.target.value);
  };

  const submit = () => {
    if (name!='') {
      setData([...data, name]);
      setName('');
    }
  };

  const deleteItem = (item) => {
    const newData = [...data];
    newData.splice(item, 1)
    setData(newData)
  }

  const editItem = (id) => {
    setName(data[id])
    setIndex(id)
  }

  const update = () => {
    if (name!='') {
      const newData = [...data]
      newData[index] = name;
      setData(newData)
      setName('')
    }
  }

  // add data to localStorage
  useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(data))
  },[data])

  return (
    <>
      <h2>To do List</h2>
      <input type='text' value={name} onChange={getName} />
      <button className="plus" type='submit' value={data} onClick={submit}>Add</button>
      <button className="" type='submit' value={data} onClick={update} >update</button>
      {
        data.map((item, id) => {
          return (<><h2><button onClick={() => editItem(id)}>edit</button>{item}
            <button onClick={() => deleteItem(id)}>deleteItem</button></h2>
          </>)
        })
      }
      
    </>
  );
}
export default TodoList;