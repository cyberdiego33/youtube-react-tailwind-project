import { useState } from "react";
import "./App.css";
import topNav from "./header";

const apiThumbnails = [
  {
    index: 1,
    duration: "14:20",
    videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
    author: "Marques Brownlee",
    view: "3.4M views . 6 months ago",
    id: "090301",
  },
  {
    index: 2,
    duration: "14:20",
    videoTitle: "Try Not To Laugh Challenge",
    author: "Marques Brownlee",
    view: "19M views . 4 months ago",
    id: "090302",
  },
  {
    index: 3,
    duration: "8:22",
    videoTitle: "Crazy Tik Tok Taken Moments Before DISASTER",
    author: "SSSniperWolf",
    view: "12M views . 1 year ago",
    id: "090303",
  },
  {
    index: 4,
    duration: "22:09",
    videoTitle: "Simple Mathematics That You Can't Solve",
    author: "Veritasium",
    view: "18M views . 4 months ago",
    id: "090304",
  },
  {
    index: 5,
    duration: "8:22",
    videoTitle: "Kadane's Algorithm to Maximum Sum Subarray Problem",
    author: "CS Dojo",
    view: "519k views . 5 year ago",
    id: "090305",
  },
  {
    index: 6,
    duration: "19:59",
    videoTitle: "Anything You Can Fit In The Circle I'll Pay For",
    author: "MrBeast",
    view: "141M views . 1 year ago",
    id: "090306",
  },
  {
    index: 7,
    duration: "10:13",
    videoTitle: "Why Planes Don't Fly Over Tibet",
    author: "RealLofeLore",
    view: "6.6M views . 1 year ago",
    id: "090307",
  },
  {
    index: 8,
    duration: "7:12",
    videoTitle: "Inside The World's Biggest Passenger Plane",
    author: "Tech Vision",
    view: "3.7M views . 10 months ago",
    id: "090304",
  },
  {
    index: 9,
    duration: "13:17",
    videoTitle: "The Secret to Super Human STRENGHT",
    author: "ThenX",
    view: "20M views . 3 year ago",
    id: "090309",
  },
  {
    index: 10,
    duration: "7:53",
    videoTitle:
      "How The World's Largest Cruise Ship Makes 30,000 Meals Every Day",
    author: "Business Insider",
    view: "14M views . 1 year ago",
    id: "0903010",
  },
  {
    index: 11,
    duration: "4:10",
    videoTitle:
      "Dubai's Crazy Underwater Train and Other Things #Only in Dubia",
    author: "Destination Tips",
    view: "3M views . 1 year ago",
    id: "0903011",
  },
  {
    index: 12,
    duration: "4:51",
    videoTitle: "What would happen if you didn't drink water? Mia Nacamulli",
    author: "TED-ED",
    view: "12M views . 5 year ago",
    id: "0903012",
  },
];

const apiSideIcons = [
  {
    icon: "home",
    label: "Home"
  },
  {
    icon: "explore",
    label: "Explore"
  },
  {
    icon: "subscriptions",
    label: "Subscriptions"
  },
  {
    icon: "originals",
    label: "Originals"
  },
  {
    icon: "youtube-music",
    label: "Youtube Music"
  },
  {
    icon: "library",
    label: "Library"
  }
]

function Thumbnails(props) {
  return (
    <div>
      <div className="relative cursor-pointer">
        <img src={props.thumbimage} alt={`thumbnail-pics-${props.index}`} />
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
          <div className="font-medium leading-[1.2] cursor-pointer mb-2.5">
            {props.vidTitle}
          </div>
          <p className="text-[12px]">{props.youtuber}</p>
          <p className="text-[12px]">{props.views}</p>
        </div>
      </div>
    </div>
  );
}

function GridVidArea() {
  return (
    <div className="grid-container grid gap-y-[60px] gap-x-[20px] p-5 pl-[92px]">
      {apiThumbnails.map(function (item) {
        return (
          <Thumbnails
            thumbimage={`./public/thumbnails/thumbnail-${item.index}.webp`}
            index={item.index}
            duration={item.duration}
            profilePic={`./public/profilePics/channel-${item.index}.jpeg`}
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

function NavBar() {
  return (
    <header className="bg-white p-2 font-bold text-lg text-red-600">
      Youtube
    </header>
  );
}

function SideIcons(props) {
  return (
    <div class="sideicons-div h-[75px] flex flex-col items-center justify-center cursor-pointer hover:bg-[#ebebeb]">
      <img src={`./public/side-icons/${props.icon}.svg`} alt="home" className="size-6 mb-1" />
      <p className="text-[10px]">{props.label}</p>
    </div>
  );
}

function SideBar() {
  return (
    <nav className="fixed top-14 bottom-0 left-0 w-[72px] z-10 text-center bg-white">
      {apiSideIcons.map(function(item) {
        return (
          <SideIcons icon={item.icon} label={item.label} />
        )
      })}
    </nav>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <SideBar />
      <GridVidArea />
    </>
  );
}

export default App;
