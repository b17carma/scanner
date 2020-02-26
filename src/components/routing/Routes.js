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