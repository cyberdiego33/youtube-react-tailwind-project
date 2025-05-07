import React from "react";
import thumbnail1 from "./assets/thumbnails/thumbnail-1.webp";
import thumbnail2 from "./assets/thumbnails/thumbnail-2.webp";
import thumbnail3 from "./assets/thumbnails/thumbnail-3.webp";
import thumbnail4 from "./assets/thumbnails/thumbnail-4.webp";
import thumbnail5 from "./assets/thumbnails/thumbnail-5.webp";
import thumbnail6 from "./assets/thumbnails/thumbnail-6.webp";
import thumbnail7 from "./assets/thumbnails/thumbnail-7.webp";
import thumbnail8 from "./assets/thumbnails/thumbnail-8.webp";
import thumbnail9 from "./assets/thumbnails/thumbnail-9.webp";
import thumbnail10 from "./assets/thumbnails/thumbnail-10.webp";
import thumbnail11 from "./assets/thumbnails/thumbnail-11.webp";
import thumbnail12 from "./assets/thumbnails/thumbnail-12.webp";
import profile1 from "./assets/profilePics/channel-1.jpeg";
import profile2 from "./assets/profilePics/channel-2.jpeg";
import profile3 from "./assets/profilePics/channel-3.jpeg";
import profile4 from "./assets/profilePics/channel-4.jpeg";
import profile5 from "./assets/profilePics/channel-5.jpeg";
import profile6 from "./assets/profilePics/channel-6.jpeg";
import profile7 from "./assets/profilePics/channel-7.jpeg";
import profile8 from "./assets/profilePics/channel-8.jpeg";
import profile9 from "./assets/profilePics/channel-9.jpeg";
import profile10 from "./assets/profilePics/channel-10.jpeg";
import profile11 from "./assets/profilePics/channel-11.jpeg";
import profile12 from "./assets/profilePics/channel-12.jpeg";
import explore from "./assets/sideIcons/explore.svg";
import home from "./assets/sideIcons/home.svg";
import subscriptions from "./assets/sideIcons/subscriptions.svg";
import library from "./assets/sideIcons/library.svg";
import originals from "./assets/sideIcons/originals.svg";
import youtubeMusic from "./assets/sideIcons/youtube-music.svg";
import youtubeShorts from "./assets/sideIcons/youtube-shorts.svg";


const apiThumbnails = [
  {
    index: 1,
    thumbnail: thumbnail1,
    profile: profile1,
    duration: "14:20",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    author: "Marques Brownlee",
    view: "3.4M views . 6 months ago",
    id: "090301",
  },
  {
    index: 2,
    thumbnail: thumbnail2,
    profile: profile2,
    duration: "14:20",
    videoTitle: "Try Not To Laugh Challenge",
    author: "Marques Brownlee",
    view: "19M views . 4 months ago",
    id: "090302",
  },
  {
    index: 3,
    thumbnail: thumbnail3,
    profile: profile3,
    duration: "8:22",
    videoTitle: "Crazy Tik Tok Taken Moments Before DISASTER",
    author: "SSSniperWolf",
    view: "12M views . 1 year ago",
    id: "090303",
  },
  {
    index: 4,
    thumbnail: thumbnail4,
    profile: profile4,
    duration: "22:09",
    videoTitle: "Simple Mathematics That You Can't Solve",
    author: "Veritasium",
    view: "18M views . 4 months ago",
    id: "090304",
  },
  {
    index: 5,
    thumbnail: thumbnail5,
    profile: profile5,
    duration: "8:22",
    videoTitle: "Kadane's Algorithm to Maximum Sum Subarray Problem",
    author: "CS Dojo",
    view: "519k views . 5 year ago",
    id: "090305",
  },
  {
    index: 6,
    thumbnail: thumbnail6,
    profile: profile6,
    duration: "19:59",
    videoTitle: "Anything You Can Fit In The Circle I'll Pay For",
    author: "MrBeast",
    view: "141M views . 1 year ago",
    id: "090306",
  },
  {
    index: 7,
    thumbnail: thumbnail7,
    profile: profile7,
    duration: "10:13",
    videoTitle: "Why Planes Don't Fly Over Tibet",
    author: "RealLofeLore",
    view: "6.6M views . 1 year ago",
    id: "090307",
  },
  {
    index: 8,
    thumbnail: thumbnail8,
    profile: profile8,
    duration: "7:12",
    videoTitle: "Inside The World's Biggest Passenger Plane",
    author: "Tech Vision",
    view: "3.7M views . 10 months ago",
    id: "090304",
  },
  {
    index: 9,
    thumbnail: thumbnail9,
    profile: profile9,
    duration: "13:17",
    videoTitle: "The Secret to Super Human STRENGHT",
    author: "ThenX",
    view: "20M views . 3 year ago",
    id: "090309",
  },
  {
    index: 10,
    thumbnail: thumbnail10,
    profile: profile10,
    duration: "7:53",
    videoTitle:
      "How The World's Largest Cruise Ship Makes 30,000 Meals Every Day",
    author: "Business Insider",
    view: "14M views . 1 year ago",
    id: "0903010",
  },
  {
    index: 11,
    thumbnail: thumbnail11,
    profile: profile11,
    duration: "4:10",
    videoTitle:
      "Dubai's Crazy Underwater Train and Other Things #Only in Dubia",
    author: "Destination Tips",
    view: "3M views . 1 year ago",
    id: "0903011",
  },
  {
    index: 12,
    thumbnail: thumbnail12,
    profile: profile12,
    duration: "4:51",
    videoTitle: "What would happen if you didn't drink water? Mia Nacamulli",
    author: "TED-ED",
    view: "12M views . 5 year ago",
    id: "0903012",
  },
];

const apiSideIcons = [
  {
    icon: home,
    label: "Home",
  },
  {
    icon: explore,
    label: "Explore",
  },
  {
    icon: subscriptions,
    label: "Subscriptions",
  },
  {
    icon: originals,
    label: "Originals",
  },
  {
    icon: youtubeMusic,
    label: "Youtube Music",
  },
  {
    icon: library,
    label: "Library",
  },
];

function BottomNav() {
  return (
    <nav className="[@media(max-width:450px)]:flex  items-center fixed bottom-0 left-0 right-0 hidden z-20 justify-between h-[50px] bg-white px-6 border-t border-[#cccccc]">
      <div className="w-fit grid justify-center">
        <img src={home} alt="home" className="size-6 mb-0.5 mx-auto" />
        <p className="text-[10px]">home</p>
      </div>
      <div className="w-fit grid justify-center">
        <img src={youtubeShorts} alt="home" className="size-6 mb-0.5 mx-auto" />
        <p className="text-[10px]">Shorts</p>
      </div>
      <div className=" grid justify-center">
        <p className="text-[40px] h-[30px] grid place-content-center rounded-full font-light p-1 bg-[#cccccc]">+</p>
      </div>
      <div className="w-fit grid justify-center">
        <img src={subscriptions} alt="home" className="size-6 mb-0.5 mx-auto " />
        <p className="text-[10px]">Subscriptions</p>
      </div>
      <div className="w-fit grid justify-center">
        <img src={home} alt="home" className="size-6 mb-0.5 mx-auto" />
        <p className="text-[10px] text-center">You</p>
      </div>
    </nav>
  );
}

export default apiThumbnails;
export { apiSideIcons, BottomNav };
