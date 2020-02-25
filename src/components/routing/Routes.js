import {Assessment as AssessmentIcon, Scanner as ScannerIcon, Build as BuildIcon, House as HomeIcon} from "@material-ui/icons";
import Equipment from "../locations/equipment/Equipment";
import Scan from "../locations/scan/Scan";
import Analytics from "../locations/analytics/Analytics";
import Home from "../locations/home/Home";
import PartList from "../locations/equipment/partlist/PartList";
import PartInfo from "../locations/equipment/partinfo/PartInfo";
import ScanResult from "../locations/scan/ScanResult";

const Routes = [
    {
        display: true,
        path: '/',
        sideBarName: 'Home',
        icon: HomeIcon,
        component: Home
    },
    {
        display: true,
        path: '/equipment',
        sideBarName: 'Equipment',
        icon: BuildIcon,
        component: Equipment
    },
    {
        display: true,
        path: '/scan',
        sideBarName: 'Scan',
        icon: ScannerIcon,
        component: Scan
    },
    {
        display: true,
        path: '/analytics',
        sideBarName: 'Analytics',
        icon: AssessmentIcon,
        component: Analytics
    },
    {
        display: false,
        path: '/equipment/:equipmentId',
        component: PartList
    },
    {
        display: false,
        path: '/equipment/:equipmentId/:partId"',
        component: PartInfo
    },
    {
        display: false,
        path: '/scan/:equipmentId/:partId',
        component: ScanResult
    }
];

export default Routes;