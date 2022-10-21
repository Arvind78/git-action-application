import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useState } from 'react'
import './showdata.css'
 export default function BasicTable() {
    const [data1, setData] = useState([]);
     
    useEffect(() => {
        fetch("https://tech-nine.vercel.app/data")
            .then((resp) => resp.json())
            .then((data) => setData(data))
         
           
    }, [])

    console.log(data1)

    return (
        
        <>
       
        <div className="heading">
            <h2>Git Action Record</h2>
        </div>
        <TableContainer component={Paper}>
            <Table sx={{ 'td': { border: 0},maxWidth:500}} aria-label="simple table">
                <TableHead>
                    <TableRow   >
                        <TableCell align="center"> Request_id</TableCell>
                        <TableCell align="center"> Author</TableCell>
                        <TableCell align="center">Action</TableCell>
                        <TableCell align="center">CreatedAt</TableCell>
                        <TableCell align="center">From_branch</TableCell>
                        <TableCell align="center">To_branch</TableCell>
                        <TableCell align="center">UpdatedAt</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data1.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{" ": { border: 0 } }}
                        >

                            <TableCell align="center">{row.request_id}</TableCell>
                            <TableCell align="center">{row.author}</TableCell>
                            <TableCell align="center">{row.action}</TableCell>
                            <TableCell align="center">{row.createdAt}</TableCell>
                            <TableCell align="center">{row.from_branch}</TableCell>
                            <TableCell align="center">{row.to_branch}</TableCell>
                            <TableCell align="center">{row.updatedAt}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
  
     
    );
}