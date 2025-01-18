import { Security } from "@/types/securities";
import { TableBodyLoader } from "@/components/ui/TableBodyLoader";
import { getTrendColor, getPercentage } from "@/utils";
import { Link } from "@tanstack/react-router";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableCell, { TableCellProps } from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import { TableBodyNoData } from "@/components/ui";

/** HEAD **/

type Header = {
  title: string;
  props?: TableCellProps;
};

type SecuritiesTableHeadProps = {
  headers: Header[];
};

export const SecuritiesTableHead = ({ headers }: SecuritiesTableHeadProps) => {
  return (
    <TableHead>
      <TableRow>
        {headers.map((header) => (
          <TableCell key={header.title} {...header.props} scope="col">
            {header.title}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

/** BODY **/

type SecuritiesTableBodyProps = {
  securities: Security[];
  onRowClick?: (_security: Security) => void;
};

const SecuritiesTableBody = ({ onRowClick, securities }: SecuritiesTableBodyProps) => {
  const handleRowClick = (security: Security) => () => {
    if (!onRowClick) return;
    onRowClick(security);
  };

  return (
    <TableBody>
      {securities.map((security) => (
        <TableRow
          onClick={handleRowClick(security)}
          key={security.id}
          sx={{
            transition: "background-color 0.3s",
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "#f1f5f9",
            },
          }}
        >
          <TableCell>
            <IconButton
              component={Link}
              onClick={(e) => e.stopPropagation()}
              to={`/securities/${security.ticker}`}
              aria-label="View security details"
            >
              <Visibility color="primary" />
            </IconButton>
          </TableCell>

          <TableCell>{security.ticker}</TableCell>
          <TableCell>{security.securityName}</TableCell>
          <TableCell>{security.sector}</TableCell>
          <TableCell>{security.country}</TableCell>
          <TableCell
            align="center"
            sx={{
              color: "white",
              backgroundColor: getTrendColor(security.trend),
            }}
          >
            {getPercentage(security.trend)}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

/** TABLE **/

type LoadingProps = { loading: true; securities?: never; onRowClick?: never };

type SecuritiesProps = {
  securities: Security[];
  loading?: false;
  onRowClick?: (_security: Security) => void;
};

type SecurityTableProps = LoadingProps | SecuritiesProps;

export const SecuritiesTable = ({ onRowClick, securities, loading }: SecurityTableProps) => {
  const headers: Header[] = [
    { title: "" },
    { title: "Symbol" },
    { title: "Name" },
    { title: "Sector" },
    { title: "Country" },
    { title: "Trend", props: { align: "center" } },
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="securities table" size="small">
        <SecuritiesTableHead headers={headers} />

        {loading && <TableBodyLoader colCount={headers.length} />}

        {securities && securities.length === 0 && <TableBodyNoData colCount={headers.length} />}

        {securities && securities.length > 0 && (
          <SecuritiesTableBody onRowClick={onRowClick} securities={securities} />
        )}
      </Table>
    </TableContainer>
  );
};
