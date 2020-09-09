import React from 'react'
import Button from 'react-bootstrap/Button'

export default class LikeButton extends React.Component {
  state = {
    liked: false,
  }
  likeImage = async () => {
    const likeState = !this.state.liked
    this.setState({ liked: likeState })
  }
  render() {
    const { liked } = this.state
    const colorValue = liked ? '#ff0000' : '#17a2b8'
    const isLiked = liked ? 'Unlike' : 'Like'
    return (
      <>
        <Button onClick={this.likeImage} style={{background: colorValue}}>{isLiked}</Button>
      </>
    );
  }
}
