import Countdown from "../Components/CountDown/CountDown";
import { AlbumFetcher } from "../Helpers/AlbumFetcher";

export default function Home(){
  return(
    <div className="Home">
      <Countdown />
      <AlbumFetcher />
    </div>
  );
}