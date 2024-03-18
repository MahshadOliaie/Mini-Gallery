

async function OneImage({params}){
    const res = await fetch(`https://api.thecatapi.com/v1/images/${params.id}`)
    const data = await res.json()
    return(
    <>
    <img src={data.url} alt="" />
    </>
    )
}

export default OneImage