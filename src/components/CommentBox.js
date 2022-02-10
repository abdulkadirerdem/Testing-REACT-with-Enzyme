import React, { useEffect, useState } from "react";
import { requireAuth } from "components/requireAuth";

// redux
import { connect } from "react-redux";
import * as actions from "actions";

// react-router
import { useNavigate } from "react-router-dom";

const CommentBox = (props) => {
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO - Call an action creator
    // And save the comment

    props.saveComment(comment);

    setComment("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={handleChange} value={comment} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button className="fetch-comments" onClick={props.fetchComments}>
        Fetch Comments
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(requireAuth(CommentBox));
