import {useState} from "react";
import {NavLink} from "react-router-dom";
import {LayoutDashboard,Users,ShieldCheck,CarFront,RefreshCw,CalendarDays,FileBarChart,Menu,X} from "lucide-react";
const items=[
["Dashboard","/admin",LayoutDashboard,true],
["Driver Management","/admin/drivers",Users],
["Driver Verification","/admin/driver-verification",ShieldCheck],
["Vehicle Management","/admin/vehicles",CarFront],
["Vehicle Assignment","/admin/vehicle-assignment",RefreshCw],
["Booking Management","/admin/bookings",CalendarDays],
["Analytics & Reports","/admin/analytics",FileBarChart]];
export default function AdminSidebar(){const [open,setOpen]=useState(false);return <>
<button className="mobile-menu-button" onClick={()=>setOpen(true)} aria-label="Open menu"><Menu/></button>
{open&&<button className="sidebar-backdrop" onClick={()=>setOpen(false)} aria-label="Close menu"/>}
<aside className={`admin-sidebar ${open?"sidebar-open":""}`}>
<div className="sidebar-brand"><div className="brand-mark"><CarFront/></div><div><b>RideFleet</b><small>ADMIN CONSOLE</small></div><button className="sidebar-close" onClick={()=>setOpen(false)}><X/></button></div>
<div className="sidebar-caption">WORKSPACE</div><nav className="sidebar-nav">{items.map(([name,path,Icon,end])=><NavLink key={path} to={path} end={!!end} onClick={()=>setOpen(false)} className={({isActive})=>`sidebar-link ${isActive?"active":""}`}><Icon size={18}/><span>{name}</span></NavLink>)}</nav>
<div className="sidebar-bottom"><div className="admin-avatar">AD</div><div><b>Administrator</b><small>Super Admin</small></div></div>
</aside></>;}