import { Suspense } from "react";
import Image from "next/image"

import Button from "./components/button";
import Loading from "./components/loading";
import { headers } from "next/headers";
async function DynamicContent() {
    const data = await fetch("http://localhost:3000/api/blog");
    const posts = await data.json()
    return (
        <ul className="mx-2 list-decimal list-inside">
            {posts.map(post => (
                <li className="" key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}
export default function Page() {

    return (
        <>
            <Button />
            <ul className="mx-2 list-decimal list-inside">
                
            </ul>
            <p>Hello Blog</p>
            <Suspense fallback={<Loading />}>
                <DynamicContent />
            </Suspense>
            <Image src={"/globe.svg"} width={150} height={150} alt="globe picture"/>
        </>
    )
}