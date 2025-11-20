import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ServiceDetail() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://mokgoba-app-backend-qwrm.onrender.com/service/${id}`)
      .then((res) => setDetails(res.data));
  }, [id]);

  if (!details) return <p>Loading…</p>;

  return (
    <div>
      <h1>{details.name}</h1>
      <p>{details.description}</p>
      <p>Price: R{details.price}</p>

      <a href="mailto:ithembalokwakha@gmail.com">Request Service</a>
    </div>
  );
}
