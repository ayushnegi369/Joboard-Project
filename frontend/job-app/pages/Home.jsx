import { useEffect } from "react";
import About from "../components/about/About";
import Navbar from "../components/homepage/Navbar";
import Profile from "../components/profile/Profile";
import Result from "../components/searchResult/Result";
import Description from "../components/descriptionTab/Description";
import { NoteProvider } from "../components/noteContext/NoteContext";
import { NotesProvider } from "../components/noteContext/SearchBarContext";
import { useNavigate } from "react-router-dom";
import { useNoteContext } from "../components/noteContext/AuthContext";

const Home = () => {
    const { isLoggedIn } = useNoteContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            // Navigate to login page
            navigate("/login");
        }
    }, [isLoggedIn, navigate]);

    return (
        <>
            {isLoggedIn ? (
                <>
                    <Navbar />
                    <NotesProvider>
                        <NoteProvider>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-4">
                                        <Result />
                                    </div>
                                    <div className="col-6">
                                        <Description />
                                    </div>
                                    <div className="col-2">
                                        <div className="row">
                                            <div className="col">
                                                <Profile />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <About />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NoteProvider>
                    </NotesProvider>
                </>
            ) : (
                <div>
                    <p>Please login !</p>
                </div>
            )}
        </>
    );
};

export default Home;
