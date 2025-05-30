import React from 'react'


const DeleteMessage = ({isOpen, onClose, onDelete,user}) => {
    // if(!isOpen) return null
    // const handleclosing =()=>{
    //     onClose();
    // }
    const handleDelete = () =>{
        onDelete(user)
        onClose()
    }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3>Are you sure you want to delete this user?</h3>
        <div className='flex rounded justify-center gap-2 '>
            <button className=' bg-green-300 p-2 rounded' onClick={
                handleDelete
            }>Yes</button>
            <button className=' bg-red-300 p-2 rounded' onClick={
                onClose
            }>No</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteMessage
