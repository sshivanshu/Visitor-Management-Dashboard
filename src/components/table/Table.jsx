import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      Name: "John Smith",
      Email: "shivi@gmail.com",
      Contact: 785,
      country: "India",
      company: "Zenken",
      appointdate: "06/07/2002",
      purpose: "Correction of aadhar"
    },
    {
      id: 2235235,
      image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      Name: "Sharon",
      Email: "shivi@gmail.com",
      Contact: 785,
      country: "India",
      company: "Twitter",
      appointdate: "06/07/2002",
      purpose: "Correction of aadhar"
    },
    {
      id: 2342353,
      image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      Name: "John",
      Email: "shivi@gmail.com",
      Contact: 785,
      country: "India",
      company: "Facebook",
      appointdate: "06/07/2002",
      purpose: "Correction of aadhar"
    },
    {
      id: 2357741,
      image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      Name: "Pratik",
      Email: "shivi@gmail.com",
      Contact: 785,
      country: "India",
      company: "Jio",
      appointdate: "06/07/2002",
      purpose: "Correction of aadhar"
    },
    {
      id: 2342355,
      image: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      Name: "Smith",
      Email: "shivi@gmail.com",
      Contact: 785,
      country: "India",
      company: "Tata",
      appointdate: "06/07/2002",
      purpose: "Correction of aadhar"
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Appointment Number</TableCell>
            <TableCell className="tableCell">Image</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Email-Id</TableCell>
            <TableCell className="tableCell">Contact Number</TableCell>
            <TableCell className="tableCell">Country</TableCell>
            <TableCell className="tableCell">Company</TableCell>
            <TableCell className="tableCell">Appointment Date</TableCell>
            <TableCell className="tableCell">Purpose of visit</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.image} alt="" className="image" />
                  
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.Name}</TableCell>
              <TableCell className="tableCell">{row.Email}</TableCell>
              <TableCell className="tableCell">{row.Contact}</TableCell>
              <TableCell className="tableCell">{row.country}</TableCell>
              <TableCell className="tableCell">{row.company}</TableCell>
              <TableCell className="tableCell">{row.appointdate}</TableCell>
              <TableCell className="tableCell">{row.purpose}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
