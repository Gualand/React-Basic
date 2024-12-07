import React from "react";
import ArchivedNoteItem from "./ArchivedNoteItem";

function ArchivedNoteList({ notes, onDelete, onPindahkan }) {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {notes.map((note) => (
            <ArchivedNoteItem
              key={note.id}
              onDelete={onDelete}
              onPindahkan={onPindahkan}
              {...note}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ArchivedNoteList;
