// prismaのseeder側で問題出るので、JSで行う
import { Comment, Post, Profile } from '@prisma/client'

interface DbData {
  post: Array<Post>,
  comment: Array<Comment>
  profile: Array<Profile>
}

const data: DbData = {
  "post": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comment": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": [
    { "id": 1, "name": "typicode" }
  ]
}

export default data