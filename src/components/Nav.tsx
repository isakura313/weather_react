import {Link} from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Anchor from '@mui/material/Link';
import Box from '@mui/material/Box'
import {Button} from "@mui/material";
import {Outlet} from "react-router-dom";

function Nav() {
    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
    return (
        <nav><Box
            sx={{
                typography: 'body1',
                '& > :not(style) + :not(style)': {
                    ml: 2,
                },
            }}
            onClick={preventDefault}
        >
            <Button variant="text">
                <Link to={`/`}>Main</Link>
            </Button>
            <Button variant="text">
                <Link to={`/savedCity`}>savedCity</Link>
            </Button>
            <Button variant="text">
                <Link to={`/savedTimes`}>savedCity</Link>
            </Button>

        </Box>
        <Outlet />
        </nav>
    )
}

export default Nav