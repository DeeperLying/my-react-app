import { wrapper } from 'store'
import { InferGetServerSidePropsType } from 'next'

import BlogMenu from 'components/blogMenu'
import Child1 from 'components/codeTest/child1'

import styles from './styles.module.less'

import { getArticleList } from 'service/blog/article/index.js'

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
    async ({ req, query }) => {
      console.log(req.cookies)
      const token = req.cookies.token
      let articleList = null
      let data
      await getArticleList({
        pageSize: 20,
        currentPage: 0,
        token
      }).then(({ data }) => {
        articleList = data
      })
      return {
        props: {
          articleList,
          query,
          data
        }
      }
    }
)

export default BlogHome
