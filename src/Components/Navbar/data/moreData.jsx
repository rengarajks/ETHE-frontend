import { FaChildReaching } from "react-icons/fa6";
import { FcCallback } from "react-icons/fc";
import { IoCall } from "react-icons/io5";
import { MdSell } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import { SiStockx } from "react-icons/si";
import { TbCategoryFilled } from "react-icons/tb";

export const moreData=[
    {
        icon:<TbCategoryFilled/>,
        title:"All Categories",
        url:'/category'
    },
    {
        icon:<MdSell/>,
        title:"Sell on Ethe",
        url:'/seller'
    },
    {
        icon:<IoCall/>,
        title:"24x7 Customer Care",
        url:'/account'
    },{
        icon:<FaChildReaching/>,
        title:"Advertise",
        url:'/account'
    }
];