import lonelyGif from "../assets/images/Lonely 404.gif";
export const ErrorPage = () => {
    return (
        <>
        <img src={lonelyGif} alt="" srcset="" style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover"
        }} />
        </>
    )
}