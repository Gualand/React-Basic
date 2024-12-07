import React from "react";
import NavbarComponent from "./NavbarComponent";
import FormComponent from "./FormComponent";
import ActiveNoteList from "./ActiveNoteList";
import { getInitialData } from "../utils/datas";
import ArchivedNoteList from "./ArchivedNoteList";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchQuery: "",
    };

    this.onSearchHandler = (query) => {
      this.setState({ searchQuery: query });
    };

    this.onAddNotesHandler = ({ title, body }) => {
      this.setState((prevState) => {
        return {
          notes: [
            ...prevState.notes,
            {
              archived: false,
              id: +new Date(),
              title,
              body,
              createdAt: new Date().toISOString(),
            },
          ],
        };
      });
    };

    this.onDeleteHandler = (id) => {
      const notes = this.state.notes.filter((note) => note.id !== id);
      this.setState({ notes });
    };

    this.onArsipHandler = (id) => {
      this.setState((prevState) => ({
        notes: prevState.notes.map((note) =>
          note.id === id ? { ...note, archived: true } : note
        ),
      }));
    };

    this.onPindahHandler = (id) => {
      this.setState((prevState) => ({
        notes: prevState.notes.map((note) =>
          note.id === id ? { ...note, archived: false } : note
        ),
      }));
    };
  }
  render() {
    const filteredArchivedNote = this.state.notes.filter(
      (note) =>
        note.archived &&
        note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );
    const filteredActiveNote = this.state.notes.filter(
      (note) =>
        !note.archived &&
        note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );

    const activeNotes = this.state.notes.filter((note) => !note.archived);
    const archivedNotes = this.state.notes.filter((note) => note.archived);
    return (
      <>
        <NavbarComponent onSearchChange={this.onSearchHandler} />
        <FormComponent addNotes={this.onAddNotesHandler} />
        <h1 className="flex justify-center font-bold underline">
          Catatan Aktif
        </h1>
        {activeNotes.length > 0 ? (
          <ActiveNoteList
            notes={filteredActiveNote}
            onDelete={this.onDeleteHandler}
            onArsip={this.onArsipHandler}
          />
        ) : (
          <p className="container mx-auto px-4">Catatan aktif tidak ada</p>
        )}
        <h1 className="flex justify-center font-bold underline mt-5">
          Catatan Arsip
        </h1>
        {archivedNotes.length > 0 ? (
          <ArchivedNoteList
            notes={filteredArchivedNote}
            onDelete={this.onDeleteHandler}
            onPindahkan={this.onPindahHandler}
          />
        ) : (
          <p className="container mx-auto px-4">Catatan arsip tidak ada</p>
        )}
      </>
    );
  }
}

export default NoteApp;
