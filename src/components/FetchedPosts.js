import React from "react";

export default ({posts}) => {
  if (!posts.length) {
    return <p className="text-center">Постов пока нет</p>
  }
  return(
    <div>
      <h1>Fetched Posts</h1>
    </div>
  )
}