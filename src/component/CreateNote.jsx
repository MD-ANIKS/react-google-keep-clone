import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Note from './Note';


export default function CreateNote() {

  const [note, setNote] = useState({
    title : '',
    content : ''
  })
  const [addItem, setAddItems] = useState([]);
  const [expand, setExpand] = useState(false);
  
  const inputEvent = (event) => {
    const {name, value} = event.target;
    setNote((preData) => {
      return {
        ...preData,
        [name] : value
      }
    })
  };

  const addNote = () => {
    

    setNote({
      title : '',
      content : ''
    })

    setAddItems( (oldItems) => {
      return [...oldItems, note]
    } );
    
  }

  const dltItem = (id) => {
    setAddItems( (oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      })
    } )
  }

  const expandIt = () => {
    setExpand(true)
  }

  const dblExpand = () => {
    if(expand) {
      setExpand(false)
    }
  }

  return (
    <section className="create-note-area">
      <div className="create-note-area-wrapper">
        <div className="create-note">
          <form action="" onClick={expandIt} onDoubleClick={dblExpand}>
            { expand ? <input type="text" value={note.title} onChange={inputEvent} name="title" id="title" placeholder='Title' /> : null}
            <textarea name="content" value={note.content} onChange={inputEvent} id="writeNote" placeholder='Write a note' cols="" rows=""></textarea>
            { expand ? <IconButton  aria-label="add" className="addButton" onClick={addNote}>
              <AddIcon className="add-sign" />
            </IconButton> : null}
          </form>
        </div>
      </div>
      <div className="note-area-wrapper">
        {addItem.map((curVal, index) => {
          return <Note key={index} id={index} title={curVal.title} content={curVal.content} dltItem={dltItem} />
        })}
      </div>
    </section>
  )
}
