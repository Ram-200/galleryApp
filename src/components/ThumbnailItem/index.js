import './index.css'
import {Component} from 'react'

class ThumbnailsList extends Component {
  renderThumbnails = () => {
    const {photosData, onClickUpdateId, selectedImageId} = this.props
    return photosData.map(eachItem => {
      const {thumbnailUrl, id, thumbnailAltText} = eachItem
      const onClickThumbnail = () => {
        onClickUpdateId(id)
      }
      const buttonName =
        id === selectedImageId ? 'selected-list-item' : 'list-item'
      return (
        <li key={id} className={buttonName} onClick={onClickThumbnail}>
          <button type="button">
            <img
              src={thumbnailUrl}
              className="thumbnail-image"
              alt={thumbnailAltText}
            />
          </button>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="thumbnail-container">
        <h1 className="heading">Nature Photography</h1>
        <p className="description">Nature Photography by Rahul</p>
        <ul className="thumbnails-list-container">{this.renderThumbnails()}</ul>
      </div>
    )
  }
}

export default ThumbnailsList
