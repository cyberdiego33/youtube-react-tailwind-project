import "./App.css";

function TopNav() {
  return (
    <header>
        
        <div class="flex justify-between items-center fixed inset-x-0 top-0 h-[57px] py-8 z-100 bg-white border border-[#cccccc] ">
            <div class="left-items header-flex">
                <div class="sandwich header-icons"><img src="images/icons/hamburger-menu.svg" alt="hamburger-menu" /></div>
                <div class="youtube-logo"><img src="images/icons/youtube-logo.svg" alt="youtube-logo" /></div>
            </div>

            <div class="middle-items header-flex">
                <div class="search-bar">
                    <input type="text" placeholder="Search" />
                    <div class="search-icon">
                        <img src="images/icons/search.svg" alt="search icon" />
                        <div class="tooltip">Search</div>
                    </div>
                </div>
                <div class="voice-search">
                    <img src="images/icons/voice-search-icon.svg" alt="voice-search-icon" />
                    <div class="tooltip">Search With Your Voice</div>
                </div>
            </div>

            <div class="right-items header-flex">
                <div class="video-upload header-icons">
                    <img src="images/icons/upload.svg" alt="video-upload" />
                    <div class="tooltip">Create</div>
                </div>
                <div class="apps-icon header-icons">
                    <img src="images/icons/youtube-apps.svg" alt="youtube-apps" />
                    <div class="tooltip">YouTube Apps</div>
                </div>
                <div class="notification header-icons">
                    <img src="images/icons/notifications.svg" alt="notification icon" />
                    <div class="red-notification">3</div>
                    <div class="tooltip">Notifications</div>
                </div>
                <div class="channel-profile"><img src="images/profile-pics/my-channel.jpeg" alt="my channel profile" /></div>
            </div>
        </div>
    </header>
  );
}

export default TopNav;
