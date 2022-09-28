import Profile from '../Profile/Profile.component';

function Page({ username }) {
  return <Profile {...{ username }} />;
}

export default Page;
