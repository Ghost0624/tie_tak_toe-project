import React, { useState, useEffect, useCallback, useRef } from "react";
import './blog.css'

const Blog = () => {
    const [char, setChar] = useState(["A","B","C","D","E"])
    const [result, setResult] = useState()
    const [pop, setPop] = useState()
    const search = useRef()

    const fetchData = useCallback(async () => {
        const response = await fetch(
            "https://thingproxy.freeboard.io/fetch/" +
            "https://itunes.apple.com/search?term=" + 
            search.current.value
        );
        const data = await response.json();
        const second_data = data.results.slice(0, 5)
        const array = []
        second_data.map((item, index) => {
            array[index] = item.artistName
        })
        setResult(array)
    }, [char])
    useEffect(() => {
        if(result == undefined || result.pop() == undefined) {
            const pop_val = char.pop()
            char.unshift(pop_val);
        }
        else {
            const pop_val1 = result.pop()
            char.unshift(pop_val1);
        }
        console.log(result);
        setTimeout(() => {
            setChar(char.slice(0, 5));
        }, 1000);
    }, [char]);

    return (
        <div >
            <div className="d-flex flex-row">
                <input ref={search} type="text" className="form-control search-bar"></input>
                <button className="search-btn btn btn-primary" onClick={fetchData}>Search</button>
            </div>
            {
                char.map((item, index) => (
                    <div id={index} className="char-div">{item}</div>
                ))
            }
        </div>
    )
}

export default Blog
