'use client'

function Photo({url}){
    return(
        <div className="w-full aspect-square bg-center bg-cover" style={{ backgroundImage: `url(${url})` }}></div>
    )
}

export default Photo