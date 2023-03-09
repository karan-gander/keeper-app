import React, { useState } from "react";

const CreateArea = (props) => {
    const [note,setNote] = useState({
        title:"",
        content:""
    })

    const handleChange = (event) =>{
      const {name,value} = event.target
    
      setNote((prevalue)=>{
        return{
            ...prevalue,
            [name]:value
            
        }
      })

    }
    const submitNote = (event)=>{
        event.preventDefault();
        props.onAdd(note)


    }
    return(
        <div className="note from">
            <form className="">
                <input type='text' name='title' onChange={handleChange} placeholder="Title" />
                <textarea name="content" onChange={handleChange} autoCapitalize='off' placeholder="Take a note..." row='3' />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    )

}
export default CreateArea