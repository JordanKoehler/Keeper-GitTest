import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NoteEntry from "./Note";
import notes from "../notes";




function App() {
  return (
    <div>
      <Header />
      {notes.map(notes =>(
      <NoteEntry 
        key={notes.id}
        title={notes.title}
        content={notes.content}
    />
))}
      <Footer />
    </div>
  );
}

export default App;
