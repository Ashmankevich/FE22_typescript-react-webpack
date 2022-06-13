import { MenuLogIn } from './MenuLogIn';
import { MenuLogOut } from './MenuLogOut';

type MenuNavProps = {
  isAuthorized: 'false' | 'true';
};

export const MenuNav: React.FC<MenuNavProps> = ({ isAuthorized }) => {
  return <div>{isAuthorized === 'true' ? <MenuLogIn /> : <MenuLogOut />}</div>;
};
