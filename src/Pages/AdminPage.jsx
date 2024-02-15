import axios from "axios";
import { useEffect, useState } from "react";
import "./CSS/AdminPage.css";

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [userList, setUserList] = useState([]);

  const checkAdminStatus = async () => {
    try {
      const response = await axios.get(
        "https://itc-final-api.vercel.app/users/admin-status"
      );
      setIsAdmin(response.data.isAdmin);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllUsers = async () => {
    try {
      const response = await axios.get("https://itc-final-api.vercel.app/users/all-users");
      setUserList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkAdminStatus();
    getAllUsers();
  }, []);

  return (
    <>
      {isAdmin && (
        <div>
          <h2 id="admin-header">Dashboard</h2>
          <table id="users-table" className="table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Admin Status</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user, i) => {
                return (
                  <tr key={i}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.isAdmin ? "Yes" : "No"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default AdminPage;
