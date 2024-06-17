export const MainCards = (props) => {
    const { item } = props;
    const { id , img_url , name , cast , rating , description , genre , watch_url } = item;
    const conditionalRating = rating >= 8.5 ? "superhit":"average";      
    const button = {
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
  }
    return (
        <li key={id} className="card">
            <div className="image">
              <img src={img_url} alt={name} width="40%" height="40%" />
            </div>
            <div className="content">
              <h1>Series : {name}</h1>
              <h3 className={conditionalRating}>Rating : {rating} ⭐</h3>
              <h3>Name : {name}</h3>
              <h3>Cast : {cast}</h3>
              <p>Content : {description}</p>
              <p>Genre : {genre}</p>
            </div>
            <a href={watch_url}>
              <button style={button}>Watch Now</button>
            </a>
        </li>
    )
}

