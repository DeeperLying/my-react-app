import { wrapper } from 'store'
import { useRouter } from 'next/router'
import { getArticle } from 'service/blog/article/index.js'
import { Spin, Result } from 'antd'
import Link from 'next/link'
import BlogMenu from 'components/blogMenu'

interface GetArticleListType {
  code: number
  errorMsg: null | string
  data: null | object
}

const Article = ({ data }: any) => {
  const router = useRouter()
  console.log(data, '1')
  return (
    <>
      <BlogMenu />

      {router.isFallback && <Spin size="large" />}

      {!router.isFallback && !data && (
        <div>
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Link href="/blog">Back Home</Link>}
          />
        </div>
      )}

      {!router.isFallback && data && (
        <div>
          <h1>{data.title}</h1>
          <div>作者: {data.author}</div>
          <div>时间: {data.date}</div>
          <div dangerouslySetInnerHTML={{ __html: data.textleng }} />
        </div>
      )}
    </>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [{ params: { articleId: '1' } }, { params: { articleId: '2' } }],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true
  }
}

export const getStaticProps = wrapper.getStaticProps(
  () =>
    async ({ params }: any) => {
      const { articleId } = params
      return await getArticle({
        id: articleId
      })
        .then(({ data }: GetArticleListType) => {
          console.log('------', data, '-=-----------')
          // console.log(resolve, 'resolve')
          // articleList = data
          return {
            props: {
              params,
              data
            }
          }
        })
        .catch(() => {
          return {
            props: {
              params,
              data: { error: 'cuowu' }
            }
          }
        })
    }
)

export default Article
