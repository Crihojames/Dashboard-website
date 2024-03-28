import "./userlist.css"
import { DataGrid } from "@mui/x-data-grid"
import { usersData } from "../../data/userData"

export default function UserList() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "username", headerName: "username", width: 200 },
    { field: "email", headerName: "email", width: 200 },
    {
      field: "status",
      headerName: "status",
      width: 90,
    },
    {
      field: "payment",
      headerName: "payments",
      width: 160,
    },
    {
      field: "action",
      headerName: "action",
      width: 160,
    },
  ]



  return (
    <div className="userlist">
      <DataGrid
        rows={usersData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}
