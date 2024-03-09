import {NotificationsNone, Language, Settings, ChatBubble} from "@mui/icons-material"

const TopNav = () => {
    return (
        <div className='topnavContainer'>
             <div className='topnavWrapper'>
                <span className='logo'>AdminDash</span>
             </div>
             <div className='topnavIconContainer'>
                <NotificationsNone className="topnavIcon"/>
                <span className="topIconBadge">2</span>
             </div>
             <div className='topnavIconContainer'>
                <Language className="topnavIcon"/>
                <span className="topIconBadge">3</span>
             </div>
             <div className='topnavIconContainer'>
                <Settings className="topnavIcon"/>
                <span className="topIconBadge">2</span>
             </div>
             <div className='topnavIconContainer'>
                <ChatBubble className="topnavIcon"/>
                <span className="topIconBadge">2</span>
             </div>
             <img src="https://avatars.githubusercontent.com/u/101941972?v=4" alt="" />
        </div>
    );
};

export default TopNav;

