import "./userlist.css"
import { DataGrid } from "@mui/x-data-grid"

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

  const rows = [
    {
      id: 1,
      username: "Criho james",
      avatar: "ew",
      email: "crihojames@gmail.com",
      status: "active",
      payment: "$345.78",
    },
    {
      id: 2,
      username: "Manasse",
      avatar: "ew",
      email: "manasse@gmail.com",
      status: "active",
      payment: "$345.78",
    },
    {
      id: 3,
      username: "Criho james",
      avatar: "ew",
      email: "crihojames@gmail.com",
      status: "active",
      payment: "$345.78",
    },
    {
      id: 4,
      username: "Criho james",
      avatar: "ew",
      email: "crihojames@gmail.com",
      status: "active",
      payment: "$345.78",
    },
    {
      id: 5,
      username: "Criho james",
      avatar: "ew",
      email: "crihojames@gmail.com",
      status: "active",
      payment: "$345.78",
    },
    {
      id: 6,
      username: "Criho james",
      avatar: "ew",
      email: "crihojames@gmail.com",
      status: "active",
      payment: "$345.78",
    },
    {
      id: 7,
      username: "Criho james",
      avatar: "ew",
      email: "crihojames@gmail.com",
      status: "active",
      payment: "$345.78",
    },
  ]

  return (
    <div className="userlist">
      <DataGrid
        rows={rows}
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
