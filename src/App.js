import './App.css'
import NoteContainer from './components/NoteContainer/index'
import {useState} from 'react';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('todo')) || [
    {
      createdOn: new Date(),
      done: false,
      value: "hello hello"
    }
  ])
  const [elements, setElements] = useState(notes.map((item, key)=>(
    <NoteContainer
      key={key}
      note={item}
      id={key}
      onDelete={()=>{onDelete(key)}}
    />
  )))

  const addNote = function(){
    const inpt = document.getElementById('inpt')
    if(inpt.value === '') return alert('você deve inserir valores dentro da caixa de texto')
    const thisNote = {createdOn: new Date(), done: false, value: inpt.value}
    const allNotes = notes
    allNotes.push(thisNote)
    setNotes(allNotes)
    localStorage.setItem('todo', JSON.stringify(allNotes))
    setElements(notes.map((item, key)=>(
      <NoteContainer
        key={key}
        note={item}
        id={key}
        onDelete={()=>{onDelete(key)}}
      />
    )))
  }
  
  const onDelete = function(key){
    const allNotes = notes
    allNotes.splice(key,1)
    setNotes(allNotes)
    localStorage.setItem('todo', JSON.stringify(allNotes))
    setElements(notes.map((item, key)=>(
      <NoteContainer
        key={key}
        note={item}
        id={key}
        onDelete={()=>{onDelete(key)}}
      />
    )))
  }

  return (
    <div id="app">
      
      {/*input area*/}
      <form>
        <input type="text" id="inpt" />
        <span id='sub' onClick={addNote}>Adicionar</span>
      </form>

      {/*output area*/}
      <ul id="out">{elements}</ul>
    </div>
  );
}

export default App;
