
export const DisplayComments = ({ blog }) => {
  return (
    <div className="display-comments">
            <h3>Comments</h3>
            <ul>
              {
                blog.comments.map(comment => (
                  <li key={crypto.randomUUID()}>{comment}</li>
                ))
              }
            </ul>
          </div>
  )
}