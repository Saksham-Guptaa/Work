import AnalyticsPage from "@/components/AnalyticsPage";
import HomePage from "@/components/HomePage";
import MarketPlace from "@/components/MarketplacePage";
import NftPage from "@/components/NftPage";
import PlaylistPage from "@/components/Playlist";
import ProfilePage from "@/components/ProfilePage";
import StudioPage from "@/components/StudioPage";
import SwappingPage from "@/components/SwappingPage";
import TrendingPage from "@/components/TrendingPage";
import UploadPage from "@/components/UploadPage";
import VideoPage from "@/pages/VideoPage";
import VideoPlayer from "@/components/VideoPlayerPage";
import Playlist from "@/components/ui/playlist";
import ellipse from '@/public/images/EllipseHome.png'


export default function Home() {
  return (
    <div className=' h-[100%]  ' style={{
      backgroundImage: `url(${ellipse.src})`,
      width: '100%',
      // height: '100%',
      backgroundSize: "cover",
      backgroundRepeat: 'no-repeat',
    }} >
        {/* <HomePage/> */}
        <VideoPage/>
        {/* <TrendingPage/> */}
        {/* <UploadPage/> */}
        {/* <StudioPage/> */}
        {/* <ProfilePage/> */}
        {/* <PlaylistPage/> */}
        {/* <SwappingPage/> */}
        {/* <AnalyticsPage/> */}
        {/* <MarketPlace/> */}
        {/* <NftPage/> */}
         {/* <VideoPlayer/> */}
      </div>
  );
}
