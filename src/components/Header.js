import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { id } = useParams();
  return <Navbar />;
};

export default Header;
