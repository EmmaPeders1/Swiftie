import Countdown from "../Components/CountDown/CountDown";
import { AlbumFetcher } from "../Fetcher/AlbumFetcher";

export default function Home(){
  return(
    <div className="Home">
      <Countdown />
      <AlbumFetcher />
    </div>
  );
}