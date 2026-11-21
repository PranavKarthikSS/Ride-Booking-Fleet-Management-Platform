import {Bell,Search} from "lucide-react";
import AdminSidebar from "./AdminSidebar";
export default function AdminLayout({title,subtitle,children}){return <div className="admin-app"><AdminSidebar/><main className="admin-main">
<header className="topbar"><div><small className="eyebrow">RIDEFLEET / ADMIN</small><h1>{title}</h1><p>{subtitle}</p></div><div className="topbar-tools"><label className="top-search"><Search size={16}/><input placeholder="Search..."/></label><button className="icon-button" aria-label="Notifications"><Bell/></button><div className="top-avatar">AD</div></div></header>
<div className="page-content">{children}</div><footer className="page-footer"><span>© 2026 RideFleet</span><span>Admin Management Portal</span></footer></main></div>}