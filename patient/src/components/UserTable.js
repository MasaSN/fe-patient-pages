import React, { useState } from 'react';
import EditContainer from './EditContainer';
import { FiTrash,FiPenTool } from 'react-icons/fi';
import DeleteMessage from './DeleteMessage';
import AddModal from './AddModal';


const UserTable = ({ users, onUpdateUser ,onDeletUser,onAddUser}) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletMessage, setDeletMessage] = useState(false)
  const [isAddOpen, setAddOpen] = useState(false)

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleSave = (updatedUser) => {
    onUpdateUser(updatedUser);
  };


  const handledeleteClick = (user) => {
    setSelectedUser(user);
    setDeletMessage(true)
    
  };
  const handleDelete = (deletedUser) =>{
    onDeletUser(deletedUser)
  }

  const handelAddeClick =() =>{
    
    setAddOpen(true)
  }
  const handleAdd = (addedUser) =>{
    onAddUser(addedUser)
  }


  return (
    <div>
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Last Login</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{user.role}</td>
              <td className="border border-gray-300 px-4 py-2">{user.status}</td>
              <td className="border border-gray-300 px-4 py-2">{user.lastLogin}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => handleEditClick(user)}
                >
                  <FiPenTool/>
                </button>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={()=> handledeleteClick(user)}
                >
                  <FiTrash/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className=' bg-blue-950 text-white  
                    py-2 px-4 rounded-md 
                    hover:bg-blue-600 ml-0 mt-4'
                    onClick={()=>{
                      handelAddeClick()
                    }} >
                        Add User</button>

      {/* Modal for Editing */}
      {isModalOpen && selectedUser && (
        <EditContainer
          user={selectedUser}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
      {deletMessage && selectedUser && (
        <DeleteMessage
        user ={selectedUser}
        isOpen = {deletMessage}
        onClose={() => setDeletMessage(false)}
        onDelete ={handleDelete}
        
        />
      )}
      <AddModal
      user ={users}
      isOpen={isAddOpen}
      onClose={() => setAddOpen(false)}
      onAdd ={handleAdd}
      />
      
    </div>
    
  );
};

export default UserTable;
