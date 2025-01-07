import { BiBell, BiWallet } from "react-icons/bi";
import { BsBellFill, BsHeartFill, BsWalletFill } from "react-icons/bs";
import { FaCircleUser, FaFirstOrder } from "react-icons/fa6";
import { GrOrderedList } from "react-icons/gr";

export const etheData=[
    {
        icon:<FaCircleUser/>,
        title:"My Profile",
        url:'/account'
    },
    {
        icon:<BsWalletFill/>,
        title:"Orders",
        url:'/account/orders'
    },
    {
        icon:<BsHeartFill/>,
        title:"Wishlist",
        url:'/account'
    },
    {
        icon:<BsBellFill/>,
        title:"Notifications",
        url:'/account'
    }

];