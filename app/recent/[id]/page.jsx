

async function OneImage({ params }) {
    console.log(params)
    const res = await fetch(`https://api.thecatapi.com/v1/images/${params.id}`)
    const data = await res.json()
    return (
        <>
            <div className="w-full h-screen flex items-center justify-center">
                <img src={data.url} className="w-full max-h-screen" />
            </div>

        </>
    )
}

export default OneImage