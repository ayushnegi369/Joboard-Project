import "./Result.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Category from "../searchResult/Category";
import SearchRes from "../searchResult/SearchRes";
import { useNoteContext } from "../noteContext/SearchBarContext";

const Result = () => {
    const [jobData, setJobData] = useState([]);
    const { myquery } = useNoteContext();
    // const myquery = "Python developer in Texas, USA";
    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: "GET",
                url: "https://jsearch.p.rapidapi.com/search",
                params: {
                    query: `${myquery}`,
                    page: "1",
                    num_pages: "1",
                },
                headers: {
                    // add header here !!!
                },
            };
            try {
                const response = await axios.request(options);
                console.log(myquery + "from console");
                setJobData(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [myquery]); // dependency list
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Category />
                    </div>
                </div>
                <div className="row">
                    <div className="col scroll-list">
                        {jobData.map((job) => (
                            <SearchRes
                                key={job.id}
                                myLogo={job.employer_logo}
                                myTitle={job.job_title}
                                myDescription={job.job_description}
                                mylink={job.job_google_link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Result;

