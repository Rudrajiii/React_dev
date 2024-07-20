export const EventHandler = () => {
    const EventMsg1 = (e) => {
        alert("Working Fine in React");
        console.log(e);
        console.log(e.target);
        console.log(e.type);

    }
    const EventMsg2 = (user) => {
        alert("Hello "+user+" bruh!");
        // console.log(e);
        // console.log(e.target);
        // console.log(e.type);
    }
    return (
        <>
        <button onClick={EventMsg1} className="p-3 bg-yellow-300 text-black" >CallMe</button>
        <br />
        <button onClick={()=>EventMsg2('Rudra')} className="p-3 bg-yellow-300 text-black" >CallUser</button>
        </>
    )
}