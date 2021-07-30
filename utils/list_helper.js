const dummy = (blogs) => {
  return 1
}


const totalLikes = (blogs) => {
  return blogs.reduce((sum, currrent) => sum + currrent.likes, 0)
}

const favoriteBlog = (blogs) => {
  const likes = blogs.map(item => item.likes)
  const maxLike = Math.max(...likes)
  return blogs.find(item => item.likes === maxLike)
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}