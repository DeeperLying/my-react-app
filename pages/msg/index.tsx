// import { useEffect } from 'react'
import { NextPage } from 'next'
import action from '../../store/actions/index'
import { wrapper } from '../../store'
// import { END } from 'redux-saga'
// import superjson from 'superjson'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../service/msg/index'

const Msg: NextPage = (props) => {
  const dispatch = useDispatch()
  console.log(props)

  dispatch(action.msg.increase())
  // let { msg } = store.getState()
  // console.log(msg)
  // useEffect(() => {
  //     dispatch(action.msg.increase())
  // }, [])

  const toLogin = () => {
    login({
      name: 'admin',
      passowrd: '12345'
    })
  }

  return (
    <div>
      <div onClick={toLogin}>login</div>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  return {
    props: {
      ui: 1,
      bb: 3
    }
  }
})

export default Msg
