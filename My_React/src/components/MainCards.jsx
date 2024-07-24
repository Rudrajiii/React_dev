import styled from 'styled-components'
export const MainCards = (props) => {
    const { item1 } = props;
    const { id , img_url , name , cast , rating , description , genre , watch_url } = item1;
    const conditionalRating = rating >= 8.5 ? "superhit":"average";      
    const StyledButton = styled.button({
        borderRadius: "8px",
        border: "1px solid transparent",
        padding: "0.6em 1.2em",
        fontSize: "1em",
        fontWeight: 500,
        fontFamily: "inherit",
        backgroundColor: `${rating >= 8.5 ? "#7dcea0":"#f7dc6f"}`,
        color: "#242424",
        cursor: "pointer",
        transition: "border-color 0.25s"
  });
  
    return (
        <li key={id} className="card bg-slate-800 p-4">
            <div className="image">
              <img src={img_url} alt={name}/>
            </div>
            <div className="content flex flex-col p-2 gap-4 font-mono">
              <h1 className='font-md font-serif'>Series : {name}</h1>
              <h3 >Rating : <span className={`${conditionalRating}`}> {rating} </span></h3>
              <h3>Name : {name}</h3>
              <h3>Cast : {cast}</h3>
              <p>Content : {description}</p>
              <p>Genre : {genre}</p>
            </div>
            <a className='p-2' href={watch_url}>
              <StyledButton>Watch Now</StyledButton>
            </a>
        </li>
    )
}

