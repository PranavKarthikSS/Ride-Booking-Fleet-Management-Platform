import {BrowserRouter,Navigate,Route,Routes} from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import DriverManagement from "./pages/admin/DriverManagement";
import DriverVerification from "./pages/admin/DriverVerification";
import VehicleManagement from "./pages/admin/VehicleManagement";
import VehicleAssignment from "./pages/admin/VehicleAssignment";
import BookingManagement from "./pages/admin/BookingManagement";
import AnalyticsReports from "./pages/admin/AnalyticsReports";
export default function App(){return <BrowserRouter><Routes>
<Route path="/" element={<Navigate to="/admin" replace/>}/>
<Route path="/admin" element={<Dashboard/>}/>
<Route path="/admin/drivers" element={<DriverManagement/>}/>
<Route path="/admin/driver-verification" element={<DriverVerification/>}/>
<Route path="/admin/vehicles" element={<VehicleManagement/>}/>
<Route path="/admin/vehicle-assignment" element={<VehicleAssignment/>}/>
<Route path="/admin/bookings" element={<BookingManagement/>}/>
<Route path="/admin/analytics" element={<AnalyticsReports/>}/>
<Route path="*" element={<Navigate to="/admin" replace/>}/>
</Routes></BrowserRouter>}