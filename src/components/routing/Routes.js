import {
    Assessment as AssessmentIcon,
    Scanner as ScannerIcon,
    Build as BuildIcon,
    House as HomeIcon,
    Person as PersonIcon
} from "@material-ui/icons";
import Equipment from "../locations/equipment/Equipment";
import Scan from "../locations/scan/Scan";
import Analytics from "../locations/analytics/Analytics";
import Home from "../locations/home/Home";
import PartList from "../locations/equipment/partlist/PartList";
import PartInfo from "../locations/equipment/partinfo/PartInfo";
import ScanResult from "../locations/scan/ScanResult";
import Login from "../auth/login/Login";
import Profile from "../locations/profile/profile";

const Routes = [
    {
        display: true,
        path: '/',
        barName: 'Home',
        icon: HomeIcon,
        component: Home
    },
    {
        display: true,
        path: '/equipment',
        barName: 'Equipment',
        icon: BuildIcon,
        component: Equipment
    },
    {
        display: false,
        path: '/profile',
        barName: 'Profile',
        icon: PersonIcon,
        component: Profile
    },
    {
        display: true,
        path: '/scan',
        barName: 'Scan',
        icon: ScannerIcon,
        component: Scan
    },
    {
        display: true,
        path: '/analytics',
        barName: 'Analytics',
        icon: AssessmentIcon,
        component: Analytics
    },
    {
        display: false,
        path: '/login',
        barName: 'Login',
        component: Login
    },
    {
        display: false,
        path: '/equipment/:equipmentId',
        component: PartList
    },
    {
        display: false,
        path: '/equipment/:equipmentId/:partId',
        component: PartInfo
    },
    {
        display: false,
        path: '/scan/:equipmentId/:partId',
        component: ScanResult
    }
];

export default Routes;