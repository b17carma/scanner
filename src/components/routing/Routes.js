import {Assessment as AssessmentIcon, Scanner as ScannerIcon, Build as BuildIcon, House as HomeIcon} from "@material-ui/icons";
import Equipment from "../locations/equipment/Equipment";
import FreeScan from "../locations/freescan/FreeScan";
import Analytics from "../locations/analytics/Analytics";
import Home from "../locations/home/Home";

const Routes = [
    {
        path: '/',
        sideBarName: 'Home',
        icon: HomeIcon,
        component: Home
    },
    {
        path: '/equipment',
        sideBarName: 'Equipment',
        icon: BuildIcon,
        component: Equipment
    },
    {
        path: '/scan',
        sideBarName: 'Info scan',
        icon: ScannerIcon,
        component: FreeScan
    },
    {
        path: '/analytics',
        sideBarName: 'Analytics',
        icon: AssessmentIcon,
        component: Analytics
    }
];

export default Routes;