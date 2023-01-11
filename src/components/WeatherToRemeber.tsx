import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import RowInterface from "../types/RowInterface";
import WeatherInfo from "../types/WeatherToRememberInfo";


function createData(
    name: string,
    data: string,
) {
    return {name, data};
}

let rows: any = [];

function WeatherToRemember(props: any) {
    if (props.main !== null) {
        rows = [
            createData('main', props.weatherInfo.main),
            createData('description',props.weatherInfo.description),
            createData('temp', props.weatherInfo.temp),

        ]
    }
    console.log(rows)
    return (
        <TableContainer>
            <Table size="small" aria-label="Weather table">
                <TableBody>
                    {rows.map((row: RowInterface) => (
                        <TableRow
                            key={row.name}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.data}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

}

export default WeatherToRemember;