import React, { useState } from 'react'

const ReportsLog = () => {
    const [reports,setReports] = useState([
        {reportName:"User Activity Report", dateGenerated:new Date().toLocaleString(), type:"PDF"},
        {reportName:"System logs Report", dateGenerated:new Date().toLocaleString(), type:"csv"}
    ])
    const newReport = {
        reportName:"New Report"
        ,dateGenerated: new Date().toLocaleString(),
        type:"PDF"
    }
    const handelView = ()=>{
        alert("the file is being viewed")
    }
    const handleGenerate =() =>{
        setReports([...reports,newReport])
        alert("New report generated")
    }
  return (

    <div>
        <button className=' bg-blue-950 text-white  
                    py-2 px-4 rounded-md 
                    hover:bg-blue-600 ml-0  mb-4'
                    onClick={handleGenerate} >
                        Generate Report</button>
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Report Name</th>
            <th className="border border-gray-300 px-4 py-2">Date Generated</th>
            <th className="border border-gray-300 px-4 py-2">Type</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
            
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{report.reportName}</td>
              <td className="border border-gray-300 px-4 py-2">{report.dateGenerated}</td>
              <td className="border border-gray-300 px-4 py-2">{report.type}</td>
              
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="text-white bg-blue-500 hover:bg-blue-600 p-1 rounded font-bold"

                  onClick={handelView}
                >
                  view
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ReportsLog
