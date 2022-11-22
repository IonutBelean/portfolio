import { useEffect } from "react";
import { useState } from "react";

const Loading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return <div></div>;
};

export default Loading;
