import { API_BASE } from "../../services/constants";
import Category from "../Category";
import Spinner from "../Spinner";
import useTrendings from "../../hooks/useTrendings";


export default function Sidebar() {
  const { trendings, loading } = useTrendings(`${API_BASE}/trending/searches?api_key=${process.env.REACT_APP_API_GIPHY}`);

  if (loading) return <Spinner />;

  return (
    <>
      <h3 className="text-3xl text-purple-300 mb-5">
        Trending categories
      </h3>
      <div className="divide-y divide-gray-100 divide-opacity-10 flex flex-col">
        {
          trendings.map(trending =>
            <Category key={trending} trending={trending} />
          )
        }
      </div>
    </>
  );
}