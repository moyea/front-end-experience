'use strict';
class CommentBox extends React.Component {
    render() {
        return <div className="xixi">
            <h1>评论:</h1>
            <div className="console-warning-level">{this.props.comment}</div>
        </div>
            ;
    }
}