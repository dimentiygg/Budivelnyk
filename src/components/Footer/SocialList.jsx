import Facebook from '../../assets/Facebook';
import Telegram from '../../assets/Telegram';
import Viber from '../../assets/Viber';

export default function SocialList() {
  return (
    <ul className="flex gap-4 mb-10 ">
      <li>
        <div className="flex justify-center items-center w-9 h-9 rounded-[64px] border solid border-grl">
          <Facebook />
        </div>
      </li>
      <li>
        <div className="flex justify-center items-center w-9 h-9 rounded-[64px] border solid border-footbr ">
          <Viber />
        </div>
      </li>
      <li>
        <div className="flex justify-center items-center w-9 h-9 rounded-[64px] border solid border-footbr ">
          <Telegram />
        </div>
      </li>
    </ul>
  );
}
