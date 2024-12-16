// NoteContext.js
import { createContext, useContext, useState } from "react";

const defaultContextValue = {
    isLoggedIn: false,
    setNote: () => {},
};

const NoteContext = createContext(defaultContextValue);

export const NotesProvider = ({ children }) => {
    const [note, setNote] = useState(defaultContextValue);

    const setNoteData = (isLoggedIn) => {
        setNote({ isLoggedIn });
    };

    return (
        <NoteContext.Provider value={{ ...note, setNote: setNoteData }}>
            {children}
        </NoteContext.Provider>
    );
};

export const useNoteContext = () => {
    const context = useContext(NoteContext);
    if (!context) {
        throw new Error("useNoteContext must be used within a NoteProvider");
    }
    return context;
};
