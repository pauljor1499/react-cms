import React, { useEffect, useState } from "react";

const SampleFile = () => {
    const [blogs, setBlogs] = useState([
        { id: 0, title: "My new website", body: "lorem ipsum...", author: "mario" },
        { id: 1, title: "Welcome party!", body: "lorem ipsum...", author: "yoshi" },
        { id: 2, title: "Web dev top tips", body: "lorem ipsum...", author: "mario" },
    ]);

    const [search, setSearch] = useState("");
    const inputSearch = (e) => {
        setSearch(e.target.value);
    };

    //render once (when DOM changes, this will never run again)
    useEffect(() => {
        console.log("use effect run");
    }, []);

    //render always (when DOM changes, this will always run)
    // useEffect(() => {
    //     console.log("use effect run");
    // });

    const removeBlog = (data) => {
        // const newBlogs = [...blogs];
        // newBlogs.splice(data.id, 1);
        // setBlogs(newBlogs);
        //dont use this because not properly functioning
        //bug upon remove descending

        const newBlogs = [...blogs].filter((blog) => blog.id !== data.id);
        setBlogs(newBlogs);
    };

    const myData = "";

    return (
        <>
            {(() => {
                if (myData === 0) {
                    return (
                        <div style={{ padding: "20px", border: "1px solid red" }}>
                            <input onChange={inputSearch} type="text" />
                            {blogs
                                .filter((item) => item.title.toLowerCase().includes(search))
                                .map((item, index) => (
                                    <div key={index}>
                                        {item.title}
                                        <button onClick={() => removeBlog(item)}>Remove</button>
                                    </div>
                                ))}
                            <div>Your text is: {search}</div>
                        </div>
                    );
                } else if (myData === 1) {
                    return <div>Only 1 Data</div>;
                } else {
                    return <div>No Data Available</div>;
                }
            })()}
        </>
    );

    // return (
    //     <>
    //         {(() => {
    //             if (blogs) {
    //                 return;
    //             } else {
    //                 return;
    //             }
    //         })()}
    //     </>
    // );
};

export default SampleFile;
