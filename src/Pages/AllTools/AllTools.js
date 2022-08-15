import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading";
import { Helmet } from "react-helmet";
import Header from "../../Shared/Header/Header";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";

const AllTools = () => {
  const navigate = useNavigate();
  const [value, setValue] =useState (8)
  const [page, setPage] = useState(0)
  const { isLoading, error, data } = useQuery(["tools", value, page], () =>
    fetch(`http://localhost:5000/allTools?page=${page}&value=${value}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  const { result: tools, count } = data;
  let btn = Math.ceil(count/value)
  
  const pre = () => {
    if(page-1 < 0){
      setPage(btn-1)
    }else{
      setPage(page-1)
    }
  }
  const after = () => {
    if(page+1 >= btn){
      return setPage(0)
    }
    setPage(page+1)
  }
  
  return (
    <main className="max-w-7xl mx-auto">
      <Helmet>
        <title>Our All Tools</title>
      </Helmet>
      <Header></Header>

      <h2 className="text-4xl text-center mt-8 mb-5 font-bold">
        Our All <span className="text-primary">Tools</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <div
            className="card bg-base-100 shadow-xl mx-auto"
            data-aos="zoom-in"
            key={tool._id}
          >
            <div className="card-body">
              <img
                src={tool.img}
                className="rounded-xl w-full"
                alt="Tools img"
              />
              <h2 className="card-title">{tool.name}</h2>

              <div className="text-justify">{tool.description}</div>

              <p>Minium Order: {tool.minium}</p>
              <p>Available Tools: {tool.available}</p>
              <h3 className="text-2xl font-semibold">Price: ${tool.price}</h3>
              <div className="card-actions justify-end">
                <button
                  onClick={() => navigate(`/purchase/${tool._id}`)}
                  className="btn btn-primary"
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-col items-end my-5'>
        <select onChange={(e) => setValue(e.target.value)} className='border-2 border-black rounded mb-1'>
          <option value='8'>8</option>
          <option value='10'>10</option>
        </select>
        <div className="flex justify-end">
          <button onClick={pre} className='btn btn-sm btn-secondary'><FontAwesomeIcon
            className="text-xl"
            icon={faAngleLeft}
          /></button>
          {[...Array(btn).keys()].map((n) => (
            <button onClick={() => setPage(n)} className={`btn btn-sm mx-1 ${(page === n) ? 'btn-primary': "btn-secondary"}`}>{n}</button>
          ))}
          <button onClick={after} className='btn btn-sm btn-secondary'><FontAwesomeIcon
            className="text-xl"
            icon={faAngleRight}
          /></button>
        </div>
      </div>
    </main>
  );
};

export default AllTools;
