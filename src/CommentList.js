//CommentList.js
import React, { Component } from 'react';
import Comment from './Comment';
import style from '../style';

class CommentList extends Component {
  render() {
    let commentNodes = this.props.data.map(comment => {
      // console.group("comment")
      // console.log("comment: ", comment)
      // console.groupEnd()
      return (
        <Comment
          author={ comment.author }
          uniqueId={ comment._id }
          onCommentUpdate={ this.props.onCommentUpdate }
          onCommentDelete={ this.props.onCommentDelete }
          key={ comment._id }
        >
          { comment.text}
        </Comment>
      )
    })

    return (
      <div style={ style.commentList }>
        { commentNodes }
      </div>
    )
  }
}

export default CommentList;
