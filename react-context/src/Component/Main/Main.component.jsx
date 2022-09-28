import TopNav from '../TopNav/TopNav.component';
import Page from '../Page/Page.component';

function Main({ title, username }) {
  return (
    <div className="main-content">
      <TopNav {...{ title }} />
      <Page {...{ username }} />
    </div>
  );
}

export default Main;
