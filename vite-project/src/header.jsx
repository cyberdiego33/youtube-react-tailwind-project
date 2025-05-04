import "./App.css";

function TopNav() {
  return (
    <header className="">
      <div className="flex justify-between items-center fixed inset-x-0 top-0 h-[57px] px-6 z-100 bg-white ">
        <div className="left-items header-flex flex w-[130px] justify-between items-center ">
          <div className="sandwich header-icons size-6 cursor-pointer">
            <img
              src="./public/top-icons/hamburger-menu.svg"
              alt="hamburger-menu"
            />
          </div>
          <div className="youtube-logo w-[90px] h-5 ">
            <img src="./public/top-icons/youtube-logo.svg" alt="youtube-logo" />
          </div>
        </div>

        <div className="middle-items header-flex flex w-[470px] shrink-2 my-2.5 ">
          <div className="search-bar py-[1px] pl-2.5 flex flex-1 border border-[#cccccc] rounded-full">
            <input
              type="text"
              placeholder="Search"
              className="w-5 flex-1 h-10 px-[1px] py-0.5 border-none"
            />
            <div className="search-icon px-1 py-[15px] w-16 h-10 border-l border-[#cccccc] bg-[#f7f7f7] rounded-r-full flex justify-center items-center group ">
              <img
                src="./public/top-icons/search.svg"
                alt="search icon"
                className="size-8"
              />
              <div className="tooltip -bottom-[30px] bg-[#606060e6] absolute text-white p-2 pointer-events-none rounded-[3px] text-[12px] transition-opacity ease-in-out opacity-0 group-hover:opacity-[1] whitespace-nowrap">
                Search
              </div>
            </div>
          </div>
          <div className="voice-search ml-2.5 size-10 p-2 rounded-full bg-[#f8f8f8] cursor-pointer flex justify-center group ">
            <img
              src="./public/top-icons/voice-search-icon.svg"
              alt="voice-search-icon"
              className="size-6"
            />
            <div className="tooltip -bottom-[30px] bg-[#606060e6] absolute text-white p-2 pointer-events-none rounded-[3px] text-[12px] transition-opacity ease-in-out opacity-0 group-hover:opacity-[1] whitespace-nowrap">
              Search With Your Voice
            </div>
          </div>
        </div>

        <div className="right-items header-flex flex w-[182px] justify-between items-center ">
          <div className="video-upload header-icons relative size-6 cursor-pointer flex justify-center group ">
            <img src="./public/top-icons/upload.svg" alt="video-upload" />
            <div className="tooltip -bottom-[50px] bg-[#606060e6] absolute text-white p-2 pointer-events-none rounded-[3px] text-[12px] transition-opacity ease-in-out opacity-0 group-hover:opacity-[1] whitespace-nowrap">
              Create
            </div>
          </div>
          <div className="apps-icon header-icons relative size-6 cursor-pointer flex justify-center group">
            <img src="./public/top-icons/youtube-apps.svg" alt="youtube-apps" />
            <div className="tooltip -bottom-[50px] bg-[#606060e6] absolute text-white p-2 pointer-events-none rounded-[3px] text-[12px] transition-opacity ease-in-out opacity-0 group-hover:opacity-[1] whitespace-nowrap">
              YouTube Apps
            </div>
          </div>
          <div className="notification header-icons relative size-6 cursor-pointer flex justify-center group">
            <img
              src="./public/top-icons/notifications.svg"
              alt="notification icon"
            />
            <div className="red-notification absolute top-[-3px] right-[-4px] text-[10px] text-white rounded-full py-[1px] px-[5px] bg-[#b31313]  ">
              3
            </div>
            <div className="tooltip -bottom-[50px] bg-[#606060e6] absolute text-white p-2 pointer-events-none rounded-[3px] text-[12px] transition-opacity ease-in-out opacity-0 group-hover:opacity-[1] whitespace-nowrap">
              Notifications
            </div>
          </div>
          <div className="channel-profile size-8">
            <img
              src="./public/profilePics/my-channel.jpeg"
              alt="my channel profile"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopNav;
