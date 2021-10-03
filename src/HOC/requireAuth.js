// @ts-nocheck
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const requireAuth = (ChildComponent) => {
  const ComposedComponent = (props) => {
    const history = useHistory();
    const auth = useSelector((state) => state.authUser);

    const { user } = auth;
    useEffect(() => {
      if (!user) return history.push("/");
    }, [user, history]);

    return <ChildComponent {...props} />;
  };

  return ComposedComponent;
};

export default requireAuth;
