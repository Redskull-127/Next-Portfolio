const Loading = () => {
    return (
        <>
            <div className="flex fixed w-screen h-screen justify-center items-center z-50 bg">
                <div className="loader relative flex justify-center items-center"> <div className="flex absolute text-2xl font-bold text-white ">Loading</div></div>
            </div>

        </>
    )
}

export default Loading