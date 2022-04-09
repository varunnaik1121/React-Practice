import React from 'react'

const Todo = ({message}) => {
    return <p className='list'>
            {message.message}
        </p>
   
}

export default Todo
