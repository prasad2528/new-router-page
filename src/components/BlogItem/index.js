// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  return (
    <li className="list-item">
      <div className="main-part">
        <h2 className="item-name">{title}</h2>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="item-description">{description}</p>
    </li>
  )
}
export default BlogItem
