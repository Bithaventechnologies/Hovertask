import DashboardHeader from "../Components/DashboardHeader"
import { Outlet } from "react-router-dom";
import DashboardNav from "../Components/DashboardNav";
import { useState } from "react";




const DashboardLayout = () => {
  
  const [activeNav, setActiveNav] = useState("Dashboard")
  const [openDropdown, setOpenDropdown] = useState(false);


  return (
  <div>
    <DashboardHeader activeNav = {activeNav} setActiveNav = {setActiveNav} openDropdown = {openDropdown} setOpenDropdown = {setOpenDropdown}/>
    <div className="flex lg:p-24 p-4 lg:gap-20">
        <DashboardNav activeNav = {activeNav} setActiveNav = {setActiveNav} openDropdown = {openDropdown} setOpenDropdown = {setOpenDropdown}/>
        <Outlet/>
    </div>
  </div>
  )
}

export default DashboardLayout