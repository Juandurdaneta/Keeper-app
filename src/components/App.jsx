import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
    const [notes, setNotes] = useState([]);

    function addNote(note){
        setNotes((prevNotes)=>{
            return [...prevNotes, note]
        })
    }

    function deleteNote(id){
        setNotes((prevNotes)=>{
           return prevNotes.filter((note, index) => { 
               return index !== id; 
            });
        });
    }

    return (
        <div>
        <Header/>

        <CreateArea createNote={addNote}/>

        {notes.map((entry, index) =>
            <Note title={entry.title} content={entry.content} id={index} key={index} onDelete={deleteNote}/>
        )}
        <Footer />
        </div>
    )
}

export default App;