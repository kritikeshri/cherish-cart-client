import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setNavigate } from "../utils/navigation";

const NavigationProvider = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setNavigate(navigate);
  }, [navigate]);

  return null;
}

export default NavigationProvider;