import React from 'react'

const headerData=[{id:1,title:"SELECT VERTICAL"},{id:2,title:"ADD PRODUCT INFO"},{id:3,title:"ADD IMAGES"},{id:4,title:"TERMS AND AGREEMENT"},]

const Header = ({selectedSection,setSelectedSection}) => {
  return (
    <div>
        <div className=' border-b md:px-4 font-medium text-xs md:text-lg flex items-center md:gap-8'>
            {headerData.map((data)=>
            <span onClick={()=>setSelectedSection(data.id)} className={`flex items-center py-2 gap-2 text-blue-600 cursor-pointer ${selectedSection==data.id?'border-b-2 border-blue-600':''}`}>
              <div className={`md:block md:visible hidden rounded-full border-2 px-[0.7rem] ${data.id==selectedSection?'bg-blue-500 border-white text-white':''}`}>{data.id}</div>
              <p>{data.title}</p>
            </span>)}
          </div>
    </div>
  )
}

export default Header