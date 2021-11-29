// prismaのseeder側で問題出るので、JSで行う
import { Comment, Post, Profile } from '@prisma/client'
import data from './data.json'

interface DbData {
  post: Array<Post>,
  comment: Array<Comment>
  profile: Array<Profile>
}

const internalData: DbData = data

export default internalData