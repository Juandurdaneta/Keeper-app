import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {

    const [showArea, setShowArea] = useState(false);
 
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleNote(event){
        const {value, name} = event.target;

        setNote((prevValue)=>{
            return{
                ...prevValue,
                [name] : value
            }
        })
    }

   
  

  return (
    <div>
      <form className="create-note">
      {showArea === true && (
          <input
            name="title"
            onChange={handleNote}
            value={note.title}
            placeholder="Title"
          />
        )}


        <textarea
          name="content"
          onClick={() => {
            setShowArea(true);
          }}
          onChange={handleNote}
          value={note.content}
          placeholder="Take a note..."
          rows={showArea ? 3 : 1}
        />


          <Zoom in={showArea}>
          <Fab onClick={(e)=>{
            props.createNote(note);
            setNote({
              title: "",
              content: ""
            })
          }}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
