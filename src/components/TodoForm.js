import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
      inputRef.current.focus()
    })

      const handleChange = e =>{
        setInput(e.target.value); 
      }
        const handleSubmit = e => {
          e.preventDefault();

          props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text:input
          });

          setInput('');
        };
    


  return ( 
    <form className ='todo-form edit' onSubmit={handleSubmit}>
      {props.edit ? (
      <>
         <input 
        type='text'
        placeholder='Add Task Your Grace' 
        value = {input}
        name='text'
        className='todo-input'
        onChange= {handleChange}
        ref={inputRef}

        />
       <button className='todo-button edit'>Update Task</button>
    </>
    ) :  (
      <>
        <input 
          type='text'
          placeholder='Add Task Your Grace' 
          value = {input}
          name='text'
          className='todo-input'
          onChange= {handleChange}
          ref={inputRef}

          />
         <button className='todo-button'>Add Task</button>
      </>
    )
    }

   
    </form>
  );
}

export default TodoForm;