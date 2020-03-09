import {
    Assessment as AssessmentIcon,
    Build as BuildIcon,
    House as HomeIcon,
    Scanner as ScannerIcon
} from "@material-ui/icons";
import EquipmentView from "../locations/equipment/EquipmentView";
import Scan from "../locations/scan/QrReaderView";
import AnalyticsView from "../locations/analytics/AnalyticsView";
import HomeView from "../locations/home/HomeView";
import ComponentListView from "../locations/equipment/componentlist/ComponentListView";
import ComponentInformationView from "../locations/equipment/componentlist/componentinformation/ComponentInformationView";
import ScanResultView from "../locations/scan/result/ScanResultView";
import OverallAnalyticsView from "../locations/analytics/overall/OverallAnalyticsView";
import EquipmentAnalyticsView from "../locations/analytics/equipment/EquipmentAnalyticsView";

const Routes = [
    {
        display: true,
        path: '/',
        barName: 'Home',
        icon: HomeIcon,
        component: HomeView
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
        component: AnalyticsView
    },
    {
        display: false,
        path: '/equipment/:equipmentId',
        component: ComponentListView
    },
    {
        display: false,
        path: '/equipment/:equipmentId/:componentId',
        component: ComponentInformationView
    },
    {
        display: false,
        path: '/scan/:equipmentId/:componentId',
        component: ScanResultView
    },
    {
        display: false,
        path: '/analytics/overall',
        component: OverallAnalyticsView
    },
    {
        display: false,
        path: '/analytics/equipment',
        component: EquipmentView
    },
    {
        display: false,
        path: '/analytics/equipment/:equipmentId',
        component: EquipmentAnalyticsView
    }
];

export default Routes;