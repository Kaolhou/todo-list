import './App.css'
import NoteContainer from './components/NoteContainer/index'
import {useState, useEffect} from 'react';

function App() {
  //event listener on enter pressed
  useEffect(()=>{
    document.getElementById('inpt').addEventListener('keypress',(e)=>{
      if(e.key==='Enter'){document.getElementById("sub").click()} 
    })
  },[])
  //get data from localstorage or create an empty data
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('todo')) || [
    {
      createdOn: new Date(),
      done: false,
      value: "hello hello"
    }
  ])
  //state from notes state, that refresh the data
  const [elements, setElements] = useState(notes.map((item, key)=>(
    <NoteContainer
      key={key}
      note={item}
      id={key}
      onDelete={()=>{onDelete(key)}}
    />
  )))
  //add a note
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
    inpt.value="";
  }
  //delete a note
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
  //jsx return
  return (
    <div id="app">
      {/*input area*/}
      <div id="form">
        <input type="text" id="inpt" />
        <span id='sub' onClick={addNote}>Adicionar</span>
      </div>

      {/*output area*/}
      <ul id="out">{elements}</ul>
    </div>
  );
}

export default App;
