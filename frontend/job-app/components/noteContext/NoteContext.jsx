// NoteContext.js
import { createContext, useContext, useState } from "react";

const defaultContextValue = {
    id: null,
    title: "",
    logo: "",
    description: "",
    link: "",
    setNote: () => {},
};

const NoteContext = createContext(defaultContextValue);

export const NoteProvider = ({ children }) => {
    const [note, setNote] = useState(defaultContextValue);

    const setNoteData = (id, title, logo, description, link) => {
        setNote({ id, title, logo, description, link });
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
