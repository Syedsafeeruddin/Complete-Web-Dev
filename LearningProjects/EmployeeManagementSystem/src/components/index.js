import Login from "./Auth/Login.jsx";
import EmployeeDashboard from "./Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from './Dashboard/AdminDashboard.jsx'
import Header from "./Header/Header.jsx";
import TaskPanel from "./Header/TaskPanel.jsx";
import TaskList from "./TaskList/TaskList.jsx";
import CreateTask from "./Header/CreateTask.jsx";
import AllTask from "./Header/AllTask.jsx";
import AuthProvider from "../contexts/AuthProvider.jsx";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage.jsx";

export {
    Login, 
    EmployeeDashboard,
    AdminDashboard,
    Header,
    TaskPanel,
    TaskList,
    CreateTask,
    AllTask,
    AuthProvider,
    getLocalStorage,
    setLocalStorage
}