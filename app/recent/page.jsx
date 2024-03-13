

async function RecentPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await res.json()
    return (
        <>
        <div className="w-full fixed bg-black opacity-5"></div>
        <h1 className="p-10 text-xl font-semibold text-white fixed">Recent</h1>
            <div className="flex flex-wrap w-full gap-1 justify-center">
                {data.map(item => {
                    return <img className="w-40" src={item.url} alt="" />
                })}
            </div>
        </>
    )
}

export default RecentPage