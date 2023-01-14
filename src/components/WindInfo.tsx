import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {Key} from "react";
import WindInfoType from "../types/WindInfoType";


interface RowInterface {
    name: Key,
    data: String
}

function createData(
    name: string,
    data: string,
) {
    return {name, data};
}

let rows: any = [];

function WindInfo(windInfo:WindInfoType) {
    const {deg, gust, speed} = windInfo.windInfo;
    console.log(deg, gust, speed);
    const CAR_DIR: string[] = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];

    function getDeg(deg: number): string {
        return CAR_DIR[Math.floor(deg / 25.5)]
    }

    if (deg !== null) {
        rows = [
            createData('Direction', getDeg(deg)),
            createData('gust', String(gust)),
            createData('speed',String(speed))

        ]
    }
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

export default WindInfo;