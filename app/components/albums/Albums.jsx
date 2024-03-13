import Album from "../album/Album"


function Albums({data}) {
    return (
        <div className=" w-full px-10 pt-5">
            <Album data={data} />
        </div>
    )
}

export default Albums