

async function RecentPage() {
    const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=50', {
        headers: {
            "x-api-key": "live_3gfLi49P7U65L6Xcc0YL0B2KQK12JVsgE69dUnmV71mEOdNjDCCBHkxL3x95chVt"
        }
    })
    const data = await res.json()
    return (
        <>
            <div className="w-full fixed bg-black opacity-5"></div>
            <h1 className="p-10 text-xl font-semibold text-white fixed">Recent</h1>
            <div className="grid grid-cols-3 w-full gap-1">
                {data.map(item => {
                    return <div className="w-full aspect-square bg-center bg-cover" style={{ backgroundImage: `url(${item.url})` }}></div>
                })}
            </div>
        </>
    )
}

export default RecentPage