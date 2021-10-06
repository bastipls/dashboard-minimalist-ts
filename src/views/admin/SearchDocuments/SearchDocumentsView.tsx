import { Table, TableContainer, TableHead, TableRow,TableCell,TableBody } from '@material-ui/core';


import { Card } from '../../../components/cards/Card';
// import TableCell from '@mui/material/TableCell';
// import TableBody from '@mui/material/TableBody';

export const SearchDocumentsView = () => {
    function createData(name:string, calories:number, fat:number, carbs:number, protein:number) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ]

    return (
        <>
        <Card className="search-documents__container-search" >
            <h4>Inicia tu búsqueda de documentos</h4>
       
  
        </Card>
        <Card className="c">
            <TableContainer className="search-documents__table-container" >
                <Table className="search-documents__table">
                    <TableHead className="search-documents__table-head">
                        <TableRow>
                            <TableCell className="search-documents__table-head-cell">Dessert (100g serving)</TableCell>
                            <TableCell className="search-documents__table-head-cell" align="right">Calories</TableCell>
                            <TableCell className="search-documents__table-head-cell" align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell className="search-documents__table-head-cell" align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell className="search-documents__table-head-cell" align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
        </>
    )
}
