// project import
import './App.css';
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { SnackbarProvider, useSnackbar } from 'notistack';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

// Snackbar CONFIG
export let snackbarRef = null;

function SnackbarReferenceProvider() {
    snackbarRef = useSnackbar();
    return <></>;
}

// APP
const App = () => (
    <SnackbarProvider maxSnack={3} autoHideDuration={5000} preventDuplicate={true}>
        <SnackbarReferenceProvider />
        <ThemeCustomization>
            <ScrollTop>
                <Routes />
            </ScrollTop>
        </ThemeCustomization>
    </SnackbarProvider>
);

export default App;
