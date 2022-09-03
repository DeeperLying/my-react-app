// import { useEffect } from 'react'
import { NextPage } from 'next'
import action from '../../store/actions/index'
import { wrapper } from '../../store'
// import { END } from 'redux-saga'
// import superjson from 'superjson'
import { useDispatch } from 'react-redux'
import { login } from '../../service/msg/index'
import { useState } from 'react'

const Msg: NextPage = (props) => {
  const dispatch = useDispatch()
  console.log(props)

  dispatch(action.msg.increase())
  // let { msg } = store.getState()
  // console.log(msg)
  // useEffect(() => {
  //     dispatch(action.msg.increase())
  // }, [])

  const [userForm, setUserForm] = useState({
    name: '',
    age: ''
  })

  const toLogin = () => {
    login({
      name: 'admin',
      password: '123'
    }).then((resolve) => {
      console.log(resolve, '---')
    })
  }

  const userFormLog = () => {
    console.log(userForm)
  }

  return (
    <div>
      <div onClick={toLogin}>login</div>
      <input
        type="String"
        defaultValue={userForm.name}
        onChange={(e): void =>
          setUserForm((from) => {
            console.log(from, 'from')
            return { ...from, name: e.target.value }
          })
        }
      />
      <input type="text" defaultValue={userForm.age} />
      <button onClick={() => userFormLog()}>点一下嘛</button>
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
