import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Header = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { id } = useParams();
  return (
    <div>
      Header {id} {query}
    </div>
  );
};

export default Header;
