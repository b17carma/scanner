import {
    Assessment as AssessmentIcon,
    Build as BuildIcon,
    House as HomeIcon,
    Scanner as ScannerIcon
} from "@material-ui/icons";
import EquipmentView from "../locations/equipment/EquipmentView";
import Scan from "../locations/scan/QrScanner";
import Analytics from "../locations/analytics/Analytics";
import Home from "../locations/home/Home";
import ComponentList from "../locations/equipment/component/componentlist/ComponentList";
import ComponentInformationView from "../locations/equipment/component/ComponentInformationView";
import ScanResult from "../locations/scan/result/ScanResult";
import OverallAnalytics from "../locations/analytics/overall/OverallAnalytics";
import EquipmentAnalytics from "../locations/analytics/equipment/EquipmentAnalytics";

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
        component: EquipmentView
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
        component: ComponentList
    },
    {
        display: false,
        path: '/equipment/:equipmentId/:componentId',
        component: ComponentInformationView
    },
    {
        display: false,
        path: '/scan/:equipmentId/:componentId',
        component: ScanResult
    },
    {
        display: false,
        path: '/analytics/overall',
        component: OverallAnalytics
    },
    {
        display: false,
        path: '/analytics/equipment',
        component: EquipmentView
    },
    {
        display: false,
        path: '/analytics/equipment/:equipmentId',
        component: EquipmentAnalytics
    }
];

export default Routes;