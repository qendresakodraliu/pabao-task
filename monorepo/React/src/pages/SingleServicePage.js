import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { services } from "../data/services";

const SingleServicePage = () => {
  const { id } = useParams();

  const service = services.find((item) => item.id == id);

  if (!service) {
    return <p>not found</p>;
  }

  return (
    <div>
      <Header title={service.name} subtitle={"Step 2/2"}></Header>
      <Link to="/">Back</Link>
    </div>
  );
};
export default SingleServicePage;
