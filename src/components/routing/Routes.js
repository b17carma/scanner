import {Assessment as AssessmentIcon, Scanner as ScannerIcon, House as HouseIcon} from "@material-ui/icons";
import Home from "../locations/home/Home";
import FreeScan from "../locations/freescan/FreeScan";
import Analytics from "../locations/analytics/Analytics";

const Routes = [
    {
        path: '/',
        sideBarName: 'Home',
        icon: HouseIcon,
        component: Home
    },
    {
        path: '/scan',
        sideBarName: 'Freescan',
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