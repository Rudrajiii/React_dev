import seriesData from "../api/NetflixData.json";
import {MainCards} from "./MainCards";
export const GojoComponent = () => {
  return (
    <ul className="card-container m-4">
      {seriesData.map((item) => {
        return (
            <MainCards key={item.id} item1={item}/>
        );
      })}
    </ul>
  );
};
