import {Assessment as AssessmentIcon, Scanner as ScannerIcon, Build as BuildIcon} from "@material-ui/icons";
import Equipment from "../locations/equipment/Equipment";
import FreeScan from "../locations/freescan/FreeScan";
import Analytics from "../locations/analytics/Analytics";

const Routes = [
    {
        path: '/',
        sideBarName: 'Equipment',
        icon: BuildIcon,
        component: Equipment
    },
    {
        path: '/scan',
        sideBarName: 'Custom scan',
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