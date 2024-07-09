import { FacebookIcon } from "../../assets/icons/FacebookIcon";
import { InstagramIcon } from "../../assets/icons/InstagramIcon";
import TiktokIcon from "../../assets/icons/TiktokIcon";
import RedItem from "./RedItem";

const RedesContainer = () => {
  return (
    <div className="w-36 mx-auto lg:mx-0">
      <RedItem href="https://www.facebook.com/profile.php?id=61560421149900&mibextid=ZbWKwL">
        <FacebookIcon />
      </RedItem>
      <RedItem href="https://www.tiktok.com/@prograwebs6?_t=8nq4iZATJck&_r=1">
        <TiktokIcon />
      </RedItem>
      <RedItem href="https://www.instagram.com/prograwebs01">
        <InstagramIcon />
      </RedItem>
    </div>
  );
};

export default RedesContainer;
