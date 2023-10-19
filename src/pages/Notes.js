import React, { useState } from 'react'

const Notes = () => {
    let notes = localStorage.getItem('notes');
    if(notes === null){
        notes = [];
    }else{
        notes = JSON.parse(notes);
    }
    function addNotes(){
        let notes = localStorage.getItem('notes');
        if(notes === null){
            notes = [];
        }else{
            notes = JSON.parse(notes);
        }
    
        if(addText.value == ''){
            alert('Add your note');
            return;
        }
        
        const noteObj = {
            title: addTitle.value,
            text: addText.value,
        }
        addTitle.value = '';
        addText.value = '';
        notes.push(noteObj);
        localStorage.setItem('notes', JSON.stringify(notes));
    }
  const showNotes =notes.map((note)=> {
        <div class="note">
                    <button class="deleteNote" id={i} onclick="EditNote(${i})">Edit</button>
                    <button class="deleteNote" id={i} onclick="deleteNote(${i})">Delete</button>
                    <span class="title">{note[i].title === "" ? 'Note' : notes[i].title}</span>
                    <div class="text">{note[i].text}</div>
        </div>
    })
  let editFlag=false;
  return (
    <>
    <div id="input-box">
        <input type="text" id="addTitle" placeholder="Title" />
        <textarea name="" id="addText" cols="30" rows="10" placeholder="Take a note.."></textarea>
        {editFlag && (<><button type='reset'>cancel</button><button>Edit</button></>)}
        {!editFlag && <button type='submit' onClick={addNotes} id="addNote">Add</button>}
    </div>
    {showNotes}
    </>
  )
}

export default Notes