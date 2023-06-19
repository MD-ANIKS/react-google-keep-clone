import React from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Note({title, content, dltItem, id}) {
  return (
    <div className="note">
          <h2 className="note-title">{title}</h2>
          <p className='note-desc'>{content}</p>
          <IconButton  aria-label="delete" size="small" className="del-btn" onClick={() => {
            dltItem(id)
          }}>
              <DeleteIcon fontSize="medium" className="delete-sign" />
          </IconButton>
    </div>
  )
}
