import { Comment, Post, Profile } from '@prisma/client'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const data = require('../../server/json/data.json')

interface DbType {
  post: Array<Post>,
  comment: Array<Comment>
  profile: Array<Profile>
}

// テーブルに挿入したいデータを、prismaようにエクスポートする
export const DbData: DbType = data

// APIとしての形として定義したいデータを、json-serverように作成
interface ApiType {
  post: Array<Post & { comments: Array<Comment> }>
}

export const ApiData: ApiType = {
  post: DbData.post.map(postData => {
    return {
      ...postData,
      comments: DbData.comment.filter(comment => comment.postId === postData.id)
    }
  })
}

// APIとしての形としてのデータをjson-serverに渡す
module.exports = () => ApiData