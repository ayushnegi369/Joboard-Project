import { useState } from "react";
import "./Category.css";

const Category = () => {
    const [activeClass1, setActiveClass1] = useState("col tabs");
    const [activeClass2, setActiveClass2] = useState("col");
    const [activeClass3, setActiveClass3] = useState("col");

    const changeTab = (tabNumber) => {
        if (tabNumber === 1) {
            setActiveClass1("col tabs");
            setActiveClass2("col");
            setActiveClass3("col");
        } else if (tabNumber === 2) {
            setActiveClass1("col");
            setActiveClass2("col tabs");
            setActiveClass3("col");
        } else {
            setActiveClass1("col");
            setActiveClass2("col");
            setActiveClass3("col tabs");
        }
    };

    return (
        <>
            <div className="container-fluid category-box">
                <div className="row category-tabs">
                    <div className={activeClass1} onClick={() => changeTab(1)}>
                        <p className="active">Best Matches</p>
                    </div>
                    <div className={activeClass2} onClick={() => changeTab(2)}>
                        <p className="active">Featured</p>
                    </div>
                    <div className={activeClass3} onClick={() => changeTab(3)}>
                        <p className="active">Most Recent</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Category;
