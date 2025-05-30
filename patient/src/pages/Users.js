import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'

import UserTable from '../components/UserTable';
import Card from '../components/Card';
import TopBar from '../dashboard/TopBar';

function Users() {
    
    const [users, setUsers] = useState([
        {
          name: 'John Doe',
          email: 'johndoe@example.com',
          role: 'Admin',
          status: 'Active',
          lastLogin: '2024-11-30',
        },
        {
          name: 'Jane Smith',
          email: 'janesmith@example.com',
          role: 'User',
          status: 'Inactive',
          lastLogin: '2024-11-28',
        },
        // Add more user data here
      ]);

      const handleUpdateUser = (updatedUser) => {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.email === updatedUser.email ? updatedUser : user
          )
        );
      }

      const handleDeleteUser = (deletedUser) => {
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user.email !== deletedUser.email)
        );
      };

      const handleAddUser =(addedUser) => {
        setUsers((prevUsers) =>{
            const userExist = prevUsers.some((user) =>
                user.email === addedUser.email)
            if(userExist){
                alert("This user already exists")
                return prevUsers
            }
            return[...prevUsers,addedUser]
        })
      }
  return (
    <div className="grid gap-4 p-4 grid-cols-[220px_1fr] bg-blue-950">
        
        <Sidebar/>
        
        <div className=' bg-white rounded-lg pb-4 shadow h-[200vh]'>
            <TopBar/>
            <div className="p-6">
                <Card title="User Management">
                    <UserTable users={users} onUpdateUser={handleUpdateUser} onDeletUser={handleDeleteUser} onAddUser={handleAddUser}/>
                    
                    
                </Card>
            </div>
        </div>
    </div>
  )
}

export default Users
