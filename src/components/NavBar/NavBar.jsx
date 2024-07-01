import MobileHeaderLogo from '../../assets/MobileHeaderLogo.jsx';
import Burger from './Burger.jsx';

export default function NavBar() {
  return (
    <header className=" shadow-hd container flex justify-between max-w-none pt-8 pb-4  ">
      <a href="">
        <MobileHeaderLogo />
      </a>

      <Burger />
    </header>
  );
}
