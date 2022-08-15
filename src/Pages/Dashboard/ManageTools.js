import React, { useState } from "react";
import axiosPrivate from '../../Shared/axiosPrivate'
import { useEffect } from "react";
import ManageToolsDelete from "./ManageToolsDelete";

const ManageTools = () => {
    const [tools, setTools] =useState([])
    const [toolsDelete, setToolsDelete] = useState(null)
    useEffect(() => {
        axiosPrivate('http://localhost:5000/manageTools').then(res => setTools(res.data))
    }, [toolsDelete])

  return (
    <section>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className='text-center'>Tools Name</th>
              <th className='text-center'>Per Price</th>
              <th className='text-center'>Quantity</th>
              <th className='text-center'>Email</th>
              <th className='text-center'>Name</th>
              <th className='text-center'>Address</th>
              <th className='text-center'>Transaction Id <br /> Remove</th>
            </tr>
          </thead>
          <tbody>
            {tools.map(tool => <tr>
                <th>{tool.toolsName}</th>
                <td>{tool.price}</td>
                <td>{tool.quantity}</td>
                <td>{tool.email}</td>
                <td>{tool.name}</td>
                <td>{tool.address}</td>
                <td className='text-center'>
                    {tool?.transactionId ? tool.transactionId : <label onClick={() => setToolsDelete(tool)} for="remove-from-booking" className="btn btn-xs btn-error">Remove</label>}
                </td>
            </tr>)}
          </tbody>
        </table>
      </div>
      {toolsDelete && <ManageToolsDelete toolsDelete={toolsDelete} setToolsDelete={setToolsDelete} />}
    </section>
  );
};

export default ManageTools;
