import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Loading from "../../Shared/Loading";

const Purchase = () => {
  const { id } = useParams();

  const {isLoading,error,data: tools,} = useQuery(["tools"], () =>
    fetch(`http://localhost:5000/tools/${id}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  const { img, name, description, minium, available, price } = tools;
  return (
    <main>
      <Header />
      <Helmet>
        <title>Purchase</title>
      </Helmet>

      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
          <img src={img} className="rounded-xl" alt="Tools img" />
          <h2 className="card-title">{name}</h2>

          <div>{description}</div>

          <p>Minium Order: {minium}</p>
          <p>Available Tools: {available}</p>
          <h3 className="text-2xl font-semibold">Price: {price}</h3>
        </div>
      </div>
    </main>
  );
};

export default Purchase;
