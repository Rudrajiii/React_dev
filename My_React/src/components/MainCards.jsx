export const MainCards = (props) => {
    const { item } = props;
    const { id , img_url , name , cast , rating , description , genre , watch_url } = item;
    return (
        <li key={id}>
            <div className="image">
              <img src={img_url} alt={name} width="40%" height="40%" />
            </div>
            <div className="content">
              <h1>Series : {name}</h1>
              <h3>Name : {name}</h3>
              <h3>Cast : {cast}</h3>
              <h3>Rating : {rating} ⭐</h3>
              <p>Content : {description}</p>
              <p>Genre : {genre}</p>
            </div>
            <a href={watch_url}>
              <button className="btn">Watch Now</button>
            </a>
          </li>
    )
}

