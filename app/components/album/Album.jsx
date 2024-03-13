'use client'
import Link from 'next/link'

function Album({data}) {

    return (
        <div className="flex flex-col my-5">
            <Link href={"/recent"}><div className="h-60 bg-slate-500 rounded-md" style={{backgroundImage: `url(${data[0].url})`}}></div></Link>
            <h3 className="text-lg">Recent</h3>
            <p className="text-xs">{data.length}</p>
        </div>
    )
}

export default Album