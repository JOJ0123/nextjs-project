"use client"
import { useState } from "react";
export default function Button() {
    const [click, setClick] = useState(false);
    return (
        <>
            <button onClick={() => setClick(!click)}>button test {click.toString()}</button>
        </>
    )
}