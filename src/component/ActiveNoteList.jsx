import React from "react";
import ActiveNoteItem from "./ActiveNoteItem";

function ActiveNoteList({ notes, onDelete, onArsip }) {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {notes.map((note) => (
            <ActiveNoteItem
              key={note.id}
              onDelete={onDelete}
              onArsip={onArsip}
              {...note}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ActiveNoteList;
