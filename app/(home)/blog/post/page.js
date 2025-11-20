"use client"

import { useEffect, useState } from "react";

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
}
export default function Page() {
    const [data, setData] = useState([]);
    const setValue = async() => {
        const returnValue = await getData();
        setData(returnValue);
    }
    useEffect(() => {
        setValue();
    }, [])
    console.log(data)
    // const data = await getData();
    return (
        <>
            <ul className="mx-2 list-disc list-inside">
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <div>Post</div>
        </>
    );
}