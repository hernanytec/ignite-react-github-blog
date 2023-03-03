import { useQuery } from '@tanstack/react-query'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useParams } from 'react-router-dom'
import rehypeHighlight from 'rehype-highlight'
import { fetchPost } from '../../utils/fetchers'
import { PostCard } from './components/PostCard'
import { PostBody, PostDetailsContainer } from './style'

export function PostDetails() {
  const { number: postNumber } = useParams()

  const { data: post, isLoading } = useQuery(['post', postNumber], () =>
    fetchPost(postNumber!),
  )

  if (isLoading) return null

  return (
    <PostDetailsContainer>
      <PostCard post={post!} />

      <PostBody>
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {post?.body as string}
        </ReactMarkdown>
      </PostBody>
    </PostDetailsContainer>
  )
}
