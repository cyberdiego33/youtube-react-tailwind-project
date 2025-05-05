import { useState } from "react";
import "./App.css";
import TopNav from "./header";
import thumbnail1 from './assets/thumbnails/thumbnail-1.webp';
import thumbnail2 from './assets/thumbnails/thumbnail-2.webp';
import thumbnail3 from './assets/thumbnails/thumbnail-3.webp';
import thumbnail4 from './assets/thumbnails/thumbnail-4.webp';
import thumbnail5 from './assets/thumbnails/thumbnail-5.webp';
import thumbnail6 from './assets/thumbnails/thumbnail-6.webp';
import thumbnail7 from './assets/thumbnails/thumbnail-7.webp';
import thumbnail8 from './assets/thumbnails/thumbnail-8.webp';
import thumbnail9 from './assets/thumbnails/thumbnail-9.webp';
import thumbnail10 from './assets/thumbnails/thumbnail-10.webp';
import thumbnail11 from './assets/thumbnails/thumbnail-11.webp';
import thumbnail12 from './assets/thumbnails/thumbnail-12.webp';
import profile1 from './assets/profilePics/channel-1.jpeg';
import profile2 from './assets/profilePics/channel-2.jpeg';
import profile3 from './assets/profilePics/channel-3.jpeg';
import profile4 from './assets/profilePics/channel-4.jpeg';
import profile5 from './assets/profilePics/channel-5.jpeg';
import profile6 from './assets/profilePics/channel-6.jpeg';
import profile7 from './assets/profilePics/channel-7.jpeg';
import profile8 from './assets/profilePics/channel-8.jpeg';
import profile9 from './assets/profilePics/channel-9.jpeg';
import profile10 from './assets/profilePics/channel-10.jpeg';
import profile11 from './assets/profilePics/channel-11.jpeg';
import profile12 from './assets/profilePics/channel-12.jpeg';
import explore from './assets/sideIcons/explore.svg';
import home from './assets/sideIcons/home.svg';
import subscriptions from './assets/sideIcons/subscriptions.svg';
import library from './assets/sideIcons/library.svg';
import originals from './assets/sideIcons/originals.svg';
import youtubeMusic from './assets/sideIcons/youtube-music.svg';

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

function Thumbnails(props) {
  return (
    <div>
      <div className="relative cursor-pointer">
        <img
          src={props.thumbimage}
          alt={`thumbnail-pics-${props.index}`}
          className="rounded-lg"
        />
        <div className="w-fit p-[3px] text-white bg-black absolute right-1.5 bottom-2.5">
          {props.duration}
        </div>
      </div>

      <div className="pt-2.5 flex">
        <div>
          <div className="size-[46px] rounded-full mr-2.5">
            <img
              src={props.profilePic}
              alt={`thumbnail-pics-${props.index}`}
              className="rounded-full"
            />
          </div>
        </div>

        <div className="leading-[1.5]">
          <div className="font-semibold leading-[1.2] cursor-pointer mb-2.5">
            {props.vidTitle}
          </div>
          <p className="text-[12px] text-[#606060]">{props.youtuber}</p>
          <p className="text-[12px] text-[#606060]">{props.views}</p>
        </div>
      </div>
    </div>
  );
}

function GridVidArea() {
  return (
    <div className="grid-container grid gap-y-[60px] gap-x-[20px] p-5 pt-16 pl-[92px]">
      {apiThumbnails.map(function (item) {
        return (
          <Thumbnails
            thumbimage={item.thumbnail}
            index={item.index}
            duration={item.duration}
            profilePic={item.profile}
            vidTitle={item.videoTitle}
            youtuber={item.author}
            views={item.view}
            key={item.id}
          />
        );
      })}
    </div>
  );
}

function SideIcons(props) {
  return (
    <div class="sideicons-div h-[75px] flex flex-col items-center justify-center cursor-pointer hover:bg-[#ebebeb]">
      <img
        src={props.icon}
        alt="home"
        className="size-6 mb-1"
      />
      <p className="text-[10px]">{props.label}</p>
    </div>
  );
}

function SideBar() {
  return (
    <nav className="fixed top-14 bottom-0 left-0 w-[72px] z-10 text-center bg-white">
      {apiSideIcons.map(function (item) {
        return <SideIcons icon={item.icon} label={item.label} />;
      })}
    </nav>
  );
}

function App() {
  return (
    <>
      <TopNav />
      <SideBar />
      <GridVidArea />
    </>
  );
}

export default App;
