import { wrapper } from 'store'
import { InferGetServerSidePropsType } from 'next'

import BlogMenu from 'components/blogMenu'
import Child1 from 'components/codeTest/child1'

import styles from './styles.module.less'

import { getArticleList } from 'service/blog/article/index.js'

interface GetArticleListType {
  code: number
  errorMsg: null | string
  data: null | Array<any>
}

const BlogHome = ({
  articleList
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className={styles.blog_container}>
      <BlogMenu />
      <div className={styles.blog_container_article_list_container}>
        <Child1 articleList={articleList} />
      </div>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  () =>
    async ({ query }) => {
      let articleList = null
      await getArticleList({
        pageSize: 20,
        currentPage: 0
      }).then(({ data }: GetArticleListType) => {
        // console.log(resolve, 'resolve')
        articleList = data
      })
      return {
        props: {
          articleList,
          query
        }
      }
    }
)

export default BlogHome
