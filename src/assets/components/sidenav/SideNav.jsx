import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  Paid,
  Assessment,
  Inventory,
  Email,
  Grading,
  ChatBubble,
  ManageAccounts,
  Analytics,
  Report,
} from "@mui/icons-material"

export default function SideNav() {
  return (
    <div className="sideNaveContainer">
      <div className="sideNaveWrapeer">
        <div className="sidenavMenu">
          <h3 className="sideNavTitle">Dashboard</h3>
          <ul className="sideNavList">
            <li className="sidenavListItem">
              <LineStyle className="sidenavIcon" />
              Home
            </li>
            <li className="sidenavListItem">
              <Timeline className="sidenavIcon" />
              Analytics
            </li>
            <li className="sidenavListItem">
              <TrendingUp className="sidenavIcon" />
              Salse
            </li>
          </ul>
        </div>

        <div className="sidenavMenu">
          <h3 className="sideNavTitle">Admin menu</h3>
          <ul className="sideNavList">
            <li className="sidenavListItem">
              <Person className="sidenavIcon" />
              Users
            </li>
            <li className="sidenavListItem">
              <Paid className="sidenavIcon" />
              Products
            </li>
            <li className="sidenavListItem">
              <Assessment className="sidenavIcon" />
              Report
            </li>
            <li className="sidenavListItem">
              <Inventory className="sidenavIcon" />
              Transaction
            </li>
          </ul>
        </div>

        <div className="sidenavMenu">
          <h3 className="sideNavTitle">Notifications</h3>
          <ul className="sideNavList">
            <li className="sidenavListItem">
              <Email className="sidenavIcon" />
              Email
            </li>
            <li className="sidenavListItem">
              <ChatBubble className="sidenavIcon" />
              Messages
            </li>
            <li className="sidenavListItem">
              <Grading className="sidenavIcon" />
              Manage
            </li>
          </ul>
        </div>

        <div className="sidenavMenu">
          <h3 className="sideNavTitle">Our Staffs</h3>
          <ul className="sideNavList">
            <li className="sidenavListItem">
              <ManageAccounts className="sidenavIcon" />
              Manage
            </li>
            <li className="sidenavListItem">
              <Analytics className="sidenavIcon" />
              Analytics
            </li>
            <li className="sidenavListItem">
              <Report className="sidenavIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
