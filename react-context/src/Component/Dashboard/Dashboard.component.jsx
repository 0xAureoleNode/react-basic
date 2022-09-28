import SideNav from '../SideNav/SideNav.component';
import Main from '../Main/Main.component';

function Dashboard({ activeProfileId, title, username }) {
  return (
    <div className="dashboard">
      <SideNav {...{ activeProfileId }} />
      <Main {...{ title, username }} />
    </div>
  );
}

export default Dashboard;
