'use client'

import Link from "next/link"

function Photo({ url, id }) {

    return (
        <Link href={`/recent/${id}`}>
            <div className="w-full aspect-square bg-center bg-cover" style={{ backgroundImage: `url(${url})` }}></div>
        </Link>
    )
}

export default Photo