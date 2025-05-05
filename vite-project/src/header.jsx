import "./App.css";
import hambuger from "./assets/topIcons/hamburger-menu.svg";
import notification from "./assets/topIcons/notifications.svg";
import search from "./assets/topIcons/search.svg";
import upload from "./assets/topIcons/upload.svg";
import voiceSearch from "./assets/topIcons/voice-search-icon.svg";
import youtubeApps from "./assets/topIcons/youtube-apps.svg";
import youtubeLogo from "./assets/topIcons/youtube-logo.svg";
import myChannel from './assets/profilePics/my-channel.jpeg';

function TopNav() {
  return (
    <header className="">
      <div className="flex justify-between items-center fixed inset-x-0 top-0 h-[57px] px-6 z-100 bg-white ">
        <div className=" flex w-[130px] justify-between items-center ">
          <div className=" size-6 cursor-pointer">
            <img
              src={hambuger}
              alt="hamburger-menu"
            />
          </div>
          <div className="w-[90px] h-5 ">
            <img src={youtubeLogo} alt="youtube-logo" />
          </div>
        </div>

        <div className=" flex w-[470px] shrink-2 my-2.5 ">
          <div className=" py-[1px] pl-2.5 flex flex-1 border border-[#cccccc] rounded-full">
            <input
              type="text"
              placeholder="Search"
              className="w-5 flex-1 h-10 px-[1px] py-0.5 border-none"
            />
            <div className=" px-1 py-[15px] w-16 h-10 border-l border-[#cccccc] bg-[#f7f7f7] rounded-r-full flex justify-center items-center group ">
              <img
                src={search}
                alt="search icon"
                className="size-8"
              />
              <div className=" -bottom-[30px] bg-[#606060e6] absolute text-white p-2 pointer-events-none rounded-[3px] text-[12px] transition-opacity ease-in-out opacity-0 group-hover:opacity-[1] whitespace-nowrap">
                Search
              </div>
            </div>
          </div>
          <div className=" ml-2.5 size-10 p-2 rounded-full bg-[#f8f8f8] cursor-pointer flex justify-center group ">
            <img
              src={voiceSearch}
              alt="voice-search-icon"
              className="size-6"
            />
            <div className=" -bottom-[30px] bg-[#606060e6] absolute text-white p-2 pointer-events-none rounded-[3px] text-[12px] transition-opacity ease-in-out opacity-0 group-hover:opacity-[1] whitespace-nowrap">
              Search With Your Voice
            </div>
          </div>
        </div>

        <div className=" flex w-[182px] justify-between items-center ">
          <div className=" relative size-6 cursor-pointer flex justify-center group ">
            <img src={upload} alt="video-upload" />
            <div className=" -bottom-[50px] bg-[#606060e6] absolute text-white p-2 pointer-events-none rounded-[3px] text-[12px] transition-opacity ease-in-out opacity-0 group-hover:opacity-[1] whitespace-nowrap">
              Create
            </div>
          </div>
          <div className=" relative size-6 cursor-pointer flex justify-center group">
            <img src={youtubeApps} alt="youtube-apps" />
            <div className=" -bottom-[50px] bg-[#606060e6] absolute text-white p-2 pointer-events-none rounded-[3px] text-[12px] transition-opacity ease-in-out opacity-0 group-hover:opacity-[1] whitespace-nowrap">
              YouTube Apps
            </div>
          </div>
          <div className=" relative size-6 cursor-pointer flex justify-center group">
            <img
              src={notification}
              alt="notification icon"
            />
            <div className="red-notification absolute top-[-3px] right-[-4px] text-[10px] text-white rounded-full py-[1px] px-[5px] bg-[#b31313]  ">
              3
            </div>
            <div className=" -bottom-[50px] bg-[#606060e6] absolute text-white p-2 pointer-events-none rounded-[3px] text-[12px] transition-opacity ease-in-out opacity-0 group-hover:opacity-[1] whitespace-nowrap">
              Notifications
            </div>
          </div>
          <div className=" size-8">
            <img
              src={myChannel}
              alt="my channel profile"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopNav;
