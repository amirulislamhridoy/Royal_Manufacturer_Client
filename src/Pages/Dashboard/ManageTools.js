import React, { useState } from "react";
import axiosPrivate from "../../Shared/axiosPrivate";
import { useEffect } from "react";
import ManageToolsDelete from "./ManageToolsDelete";

const ManageTools = () => {
  const [tools, setTools] = useState([]);
  const [toolsDelete, setToolsDelete] = useState(null);
  useEffect(() => {
    axiosPrivate("http://localhost:5000/manageTools").then((res) =>
      setTools(res.data)
    );
  }, [toolsDelete]);

  return (
    <section>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Tools Name</th>
              <th></th>
              <th>Minium Order</th>
              <th>Available</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool) => (
              <tr key={tool._id}>
                <th>{tool.name}</th>
                <td className='py-1'>
                    <div className="w-24 mask mask-squircle">
                      <img src={tool.img} />
                    </div>
                </td>
                <td>{tool.minium}</td>
                <td>{tool.available}</td>
                <td>{tool.price}</td>
                <td className='text-center'>
                    {tool?.transactionId ? tool.transactionId : <label onClick={() => setToolsDelete(tool)} htmlFor="remove-from-booking" className="btn btn-xs btn-error">Remove</label>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {toolsDelete && (
        <ManageToolsDelete
          toolsDelete={toolsDelete}
          setToolsDelete={setToolsDelete}
        />
      )}
    </section>
  );
};

export default ManageTools;
