import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";

import Createnode from "./Createnote.jsx";
import { idText } from "typescript";

function App() {
  const [listofnotes, setnotes] = useState([]);

  function addnote(newnote) {
    setnotes((prevvalue) => {
      return [...prevvalue, newnote];
    });
  }

  function deletenote(noteid){
    
     setnotes((prevnotes)=>{
       return prevnotes.filter((eachnote,index)=>{
           return index!== noteid;
       });
       
     });
  }
  return (
    <div>
      <Header />
      <Createnode onadd={addnote} />
      {listofnotes.map((eachitem,index) => {
        return <Note
          key={index}
          id={index} 
          title={eachitem.title}
           content={eachitem.content}
           ondelete={deletenote} />;
      })}

      <Footer />
    </div>
  );
}

export default App;
