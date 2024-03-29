/*
 * @Author: Lee
 * @Date: 2022-10-22 16:27:50
 * @LastEditTime: 2023-06-10 14:55:05
 * @LastEditors: Lee
 */
import { wrapper } from 'store'

import BlogMenu from 'components/blogMenu'

import styles from './styles.module.less'

import { getArticleList } from 'service/blog/article/index.js'
import { useEffect } from 'react'

const BlogHome = ({ token }: any) => {
  useEffect(() => {
    getArticleList({
      pageSize: 20,
      currentPage: 0,
      token
    })
      .then(({ data }) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error, 'error message')
      })
  }, [])

  return (
    <div className={styles.blog_container}>
      <BlogMenu />
      <div className={styles.blog_container_article_list_container}>
        {/* <Child1 articleList={articleList} /> */}
      </div>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  () =>
    async ({ req, query }) => {
      const token = req.cookies.token
      if (!token) {
        // return {
        //   redirect: {
        //     destination: '/',
        //     permanent: false
        //   }
        // }
      }
      return {
        props: {
          query
        }
      }
    }
)

export default BlogHome
