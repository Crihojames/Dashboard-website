import "./userlist.css"
import { DataGrid } from "@mui/x-data-grid"
import { DeleteOutline } from "@mui/icons-material"
import { usersData } from "../../data/userData"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function UserList() {

   const [data, setData] = useState(usersData)
   const handleDelete = (id)=>{
    setData(data.filter((item)=>item.id !== id))
   }
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
          <Link to={"/user/" + params.row.id}>
            <button className="editUser">Edit</button>
          </Link>
            <DeleteOutline className="deletelist"
              onClick={()=>handleDelete(params.row.id)}
            />
          </div>
        )
      },
    },
  ]



  return (
    <div className="userlist">
      <DataGrid
        rows={data}
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
