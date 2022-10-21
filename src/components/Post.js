import React, { useEffect, useState } from "react";
import { HandThumbsUp } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./Post.css";

function Post(props) {
	const [comments, changeComments] = useState(props.comment);

	const [commentField, changeCommentField] = useState([{ field: "" }]);

	const [liked, changeLiked] = useState(false);

	const [likeCount, changeLikeCount] = useState(props.likes);

	// useEffect(() => {
	// 	const stringFromLS = localStorage.getItem("commentsList");
	// 	changeComments(JSON.parse(stringFromLS) || []);
	// }, []);

	const handleLike = () => {
		if (!liked) {
			changeLikeCount(likeCount + 1);
			changeLiked(true);
		} else {
			changeLikeCount(likeCount - 1);
			changeLiked(false);
		}
	};

	const buildComments = () => {
		let createdComments = comments.map((comment) => {
			return (
				<p key={comment.username}>
					{comment.username}: {comment.comment}
				</p>
			);
		});
		return createdComments;
	};

	const handleChange = (event) => {
		let newComment = event.target.value;
		let key = event.target.name;
		const newState = { ...commentField };
		newState[key] = newComment;

		changeCommentField(newState);
	};

	const submitComment = () => {
		changeComments((comments) => {
			let newComments = [...comments, commentField];
			// localStorage.setItem("commentsList", JSON.stringify(newComments));
			newComments[newComments.length - 1]["name"] = "You";
			return newComments;
		});
	};

	return (
		<div>
			<Card className="card" border="primary">
				<Card.Text className="username-label">{props.username}</Card.Text>
				<Card.Body>
					<Card.Text>{props.body}</Card.Text>
					<Card.Img className="img-max-size" src={props.image} />
				</Card.Body>

				<div className="likes-comments">
					<div style={{ display: "flex", alignItems: "end" }}>
						<div className="like-box">{likeCount} Likes</div>
					</div>
					<div className="comment-box">{buildComments()}</div>
				</div>

				<div className="like-comment">
					<Button variant="primary" onClick={() => handleLike()}>
						<HandThumbsUp /> Like
					</Button>
					<Form style={{ display: "flex", gap: "0.5rem" }}>
						<Form.Group controlId="comment">
							<Form.Control
								className="comment-form"
								value={comments.comment}
								name="comment"
								type="text"
								onChange={(event) => {
									handleChange(event);
								}}
							/>
						</Form.Group>
						<img
							className="send-icon"
							src="https://img.icons8.com/ios-glyphs/344/filled-sent.png"
							alt="Send icon"
							onClick={() => submitComment()}
						/>
					</Form>
				</div>
			</Card>
		</div>
	);
}

export default Post;
