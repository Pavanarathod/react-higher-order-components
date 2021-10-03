import { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import requireAuth from "../HOC/requireAuth";
import { commentActions } from "../slices/commentSlice";
import Layout from "./Layout";

const PostPage = ({ history }) => {
  const dispatch = useDispatch();
  const [comment, setCommet] = useState("");

  const createComment = (e) => {
    e.preventDefault();
    dispatch(
      commentActions.createComment({
        comment,
      })
    );

    history.push("/");
  };

  return (
    <Layout>
      <Header />
      <h1>Create New Comment</h1>
      <form
        onSubmit={createComment}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
        }}
      >
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={comment}
          onChange={(e) => setCommet(e.target.value)}
        ></textarea>
        <button>Add Comment</button>
      </form>
    </Layout>
  );
};

export default requireAuth(PostPage);
