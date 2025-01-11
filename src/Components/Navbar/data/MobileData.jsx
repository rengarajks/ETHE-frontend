import { BsBellFill, BsHeartFill, BsWalletFill } from "react-icons/bs";
import { FaAd } from "react-icons/fa";
import { FaArrowTrendUp, FaCircleUser } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdSell } from "react-icons/md";
import { TbCategoryFilled } from "react-icons/tb";

export const MobileEtheData=[
    {
        title:'All Categories',
        icon:<TbCategoryFilled/>,
        url:'/category'
    },
    {
        title:'Top Sale',
        icon:<FaArrowTrendUp/>,
        url:'/'
    }

];
export const MobileUserData=[
    {
        title:'My Account',
        icon:<FaCircleUser/>,
        url:'/account'
    },
    {
        title:'My Orders',
        icon:<BsWalletFill/>,
        url:'/account/orders'
    },
    {
        title:'My Wishlist',
        icon:<BsHeartFill/>,
        url:'/account'
    },
    {
        title:'My Notifications',
        icon:<BsBellFill/>,
        url:'/account'
    }
];
export const MobileServiceData=[
    {
        title:'Sell on Ethe',
        icon:<MdSell/>,
        url:'/seller'
    },
    {
        title:'24x7 Customer Care',
        icon:<IoCall/>,
        url:'/seller'
    },
    {
        title:'Advertise',
        icon:<FaAd/>,
        url:'/seller'
    }
];