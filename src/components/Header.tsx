import logo from "./images/logo.svg";

import iconMenu from "./images/icon-menu.svg";
import iconCart from "./images/icon-cart.svg";

import imageAvatar from "./images/image-avatar.png";

export default function Header() {
  return (
    <header className="px-6 py-5 flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <button className="" aria-label="menu button">
          <img src={iconMenu} alt="" />
        </button>
        <div className="w-[8.625rem]">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <button className="" aria-label="cart button">
          <img src={iconCart} alt="" />
        </button>
        <div className="rounded-full w-6">
          <img src={imageAvatar} alt="" />
        </div>
      </div>
    </header>
  );
}
