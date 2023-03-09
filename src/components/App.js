// import logo from './logo.svg';
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from './Note'

import CreateArea from "./CreateArea";



function App() {
  const createNotes = (note) =>{
    return <Note key={note.key} title={note.title}  content={note.content}/>
  
  }
  
  
  const addNote = (note) =>{
   setNotes((preValue)=>{
    return [...preValue,note]
   })
  }
  const deleteNote = (id)=>{
    setNotes(preValue=>{
      return preValue.filter((noteItem,index)=>{
        return index !== id;
      })
    })


  }
  const [notes,setNotes] =useState([])

  return (
    <div className="">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem,index)=>{
        return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
      })}
      
      
      <Footer />
     
    </div>
  );
}

export default App;
