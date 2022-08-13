// import { useEffect } from 'react'
import { NextPage } from 'next'
import action from '../../store/actions/index'
import { wrapper } from '../../store'
// import { END } from 'redux-saga'
// import superjson from 'superjson'
import { useSelector, useDispatch } from 'react-redux'

const Msg: NextPage = (props) => {
  const dispatch = useDispatch()
  console.log(props)

  dispatch(action.msg.increase())
  // let { msg } = store.getState()
  // console.log(msg)
  // useEffect(() => {
  //     dispatch(action.msg.increase())
  // }, [])

  const msg = useSelector((store: any) => store.msg)
  console.log(msg)
  return (
    <div>
      {/* {msg.count}
            <button onClick={() => {store.dispatch(action.msg.increase(90))}} >1231</button> */}
      1
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
