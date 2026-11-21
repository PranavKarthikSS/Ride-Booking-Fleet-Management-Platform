
import React from "react";
import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  CarFront,
  RefreshCw,
  CalendarDays,
  FileBarChart,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import "./AdminSidebar.css";

const menuItems = [
  {
    title: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Driver Management",
    path: "/admin/drivers",
    icon: Users,
  },
  {
    title: "Driver Verification",
    path: "/admin/driver-verification",
    icon: ShieldCheck,
  },
  {
    title: "Vehicle Management",
    path: "/admin/vehicles",
    icon: CarFront,
  },
  {
    title: "Vehicle Assignment",
    path: "/admin/vehicle-assignment",
    icon: RefreshCw,
  },
  {
    title: "Booking Management",
    path: "/admin/bookings",
    icon: CalendarDays,
  },
  {
    title: "Analytics & Reports",
    path: "/admin/analytics",
    icon: FileBarChart,
  },
];

function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="admin-brand">
        <div className="brand-icon">
          <CarFront size={23} />
        </div>
        <div>
          <h2>RideFleet</h2>
          <span>Admin Panel</span>
        </div>
      </div>

      <div className="sidebar-section">
        <span className="sidebar-label">MAIN MENU</span>

        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/admin"}
                className={({ isActive }) =>
                  `nav-item ${isActive ? "active" : ""}`
                }
              >
                <Icon size={18} />
                <span>{item.title}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="sidebar-bottom">
        <div className="admin-profile">
          <div className="profile-avatar">AD</div>
          <div>
            <strong>Administrator</strong>
            <span>Super Admin</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default AdminSidebar;
