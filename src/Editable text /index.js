import './index.css'
import {useState} from 'react'
import Stybutton from './styledComponent'

const EditableTextHome = () => {
  const [editMode, setEditMode] = useState(true)
  const [text, setText] = useState('')

  const toggleFun = () => {
    setEditMode(prev => !prev)
  }

  const renderInputEl = () => (
    <div className="d-flex">
      <input
        onChange={event => {
          setText(event.target.value)
        }}
        value={text}
        type="text"
        className="form-control mr-3"
      />
      <Stybutton onClick={toggleFun}>Save</Stybutton>
    </div>
  )

  const renderTextEl = () => (
    <div className="d-flex">
      <p className="mr-4">{text}</p>
      <Stybutton onClick={toggleFun}>Edit</Stybutton>
    </div>
  )

  return (
    <div className="bgContainer">
      <div className="card">
        <h1 className="text-center mb-3">Editable Text Input</h1>
        {editMode ? renderInputEl() : renderTextEl()}
      </div>
    </div>
  )
}

export default EditableTextHome
