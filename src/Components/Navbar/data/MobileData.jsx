import { BsBellFill, BsHeartFill, BsWalletFill } from "react-icons/bs";
import { FaAd } from "react-icons/fa";
import { FaArrowTrendUp, FaCircleUser } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdSell } from "react-icons/md";
import { TbCategoryFilled } from "react-icons/tb";

export const MobileEtheData=[
    {
        title:'All Categories',
        icon:<TbCategoryFilled/>
    },
    {
        title:'Top Sale',
        icon:<FaArrowTrendUp/>
    }

];
export const MobileUserData=[
    {
        title:'My Account',
        icon:<FaCircleUser/>
    },
    {
        title:'My Orders',
        icon:<BsWalletFill/>
    },
    {
        title:'My Wishlist',
        icon:<BsHeartFill/>
    },
    {
        title:'My Notifications',
        icon:<BsBellFill/>
    }
];
export const MobileServiceData=[
    {
        title:'Sell on Ethe',
        icon:<MdSell/>
    },
    {
        title:'24x7 Customer Care',
        icon:<IoCall/>
    },
    {
        title:'Advertise',
        icon:<FaAd/>
    }
];