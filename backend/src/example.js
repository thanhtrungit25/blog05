import { initDatabase } from './db/init.js'
import { Post } from './db/models/post.js'

await initDatabase()

const post = new Post({
  title: 'Hello MongoDB',
  author: 'Trung DG',
  contents: 'This is using mongodb',
  tags: ['mongodb'],
})

await post.save()
// await Post.findByIdAndUpdate(createdPost._id, {
//   $set: { title: 'Hello, again, mongoose!' },
// })

const posts = await Post.find()
console.log(posts)
