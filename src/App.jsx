import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import About from "./pages/About/About.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import ManageCategory from "./pages/ManageCategory/ManageCategory.jsx";
import ManageUsers from "./pages/ManageUsers/ManageUsers.jsx";
import ManageItems from "./pages/ManageItems/ManageItems.jsx";
import Menubar from "./components/Menubar/Menubar.jsx";
import Explore from "./pages/Explore/Explore.jsx";

const App = () => {
    return (
        <>
            <Menubar/>
            <Toaster position="top-right" />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                {/*<Route path="/category" element={<ManageCategory />} />*/}
                <Route path="/users" element={<ManageUsers />} />
                <Route path="/items" element={<ManageItems />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
};

export default App;


// import Menubar from "./components/Menubar/Menubar.jsx";
// import {Route, Routes, useLocation} from "react-router-dom";
// import ManageCategory from "./pages/ManageCategory/ManageCategory.jsx";
// import ManageUsers from "./pages/ManageUsers/ManageUsers.jsx";
// import ManageItems from "./pages/ManageItems/ManageItems.jsx";
// import Explore from "./pages/Explore/Explore.jsx";
// import Dashboard from "./pages/Dashboard/Dashboard.jsx";
// import {Toaster} from "react-hot-toast";
// import Login from "./pages/Login/Login.jsx";
// import Signup from './pages/Signup/Signup';
// import About from './pages/About/About';
//
// const App = () => {
//     const location = useLocation();
//     return (
//         <div >
//             {location.pathname !== "/login"  && <Menubar/>}
//             <Toaster/>
//             <Routes>
//                 <Route path="/dashboard" element={<Dashboard />} />
//                 <Route path="/category" element={<ManageCategory />} />
//                 <Route path="/users" element={<ManageUsers />} />
//                 <Route path="/items" element={<ManageItems />} />
//                 <Route path="/explore" element={<Explore />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/" element={<Dashboard />} />
//             </Routes>
//         </div>
//     );
// }
// export default App;