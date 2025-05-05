import { useState } from "react";
import "./App.css";
import TopNav from "./header";
import apiThumbnails from "./ApiImages";
import { apiSideIcons, BottomNav } from "./ApiImages";

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
    <div className="grid-container grid gap-y-[60px] gap-x-[20px] p-5 pt-16 pl-[92px] [@media(max-width:450px)]:pl-5">
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
      <img src={props.icon} alt="home" className="size-6 mb-1" />
      <p className="text-[10px]">{props.label}</p>
    </div>
  );
}

function SideBar() {
  return (
    <nav className=" fixed top-14 bottom-0 left-0 w-[72px] z-10 text-center bg-white [@media(max-width:450px)]:hidden">
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
      <BottomNav />
    </>
  );
}

export default App;
