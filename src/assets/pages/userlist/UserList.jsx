import "./userlist.css"
import { DataGrid } from "@mui/x-data-grid"
import { DeleteOutline } from "@mui/icons-material"
import { usersData } from "../../data/userData"

export default function UserList() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "username",
      headerName: "username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="user">
            <img
              src={params.row.avatar}
              alt="no internet connection"
              className="userImg"
            />
            {params.row.username}
          </div>
        )
      },
    },
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
      renderCell: (params) => {
        return (
          <div className="actionContainer">
            <button className="editUser">Edit</button>
            <DeleteOutline className="deletelist"/>
          </div>
        )
      },
    },
  ]



  return (
    <div className="userlist">
      <DataGrid
        rows={usersData}
        columns={columns}
        disableRowSelectionOnClick
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
