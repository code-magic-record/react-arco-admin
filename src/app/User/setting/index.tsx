import { Avatar, Button, Card, Descriptions } from '@arco-design/web-react'
import React, { useContext, useReducer } from 'react';
import styles from './index.module.less'

const initialState = { data: [{
  label: 'Name',
  value: 'Socrates',
}, {
  label: 'Mobile',
  value: '123-1234-1234',
}, {
  label: 'Residence',
  value: 'Beijing'
}, {
  label: 'Hometown',
  value: 'Beijing',
}, {
  label: 'Address',
  value: 'Yingdu Building, Zhichun Road, Beijing'
}]
};

type Action = { type: "update" }
function reducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case 'update':
      return {
        ...state,
        data: state.data.splice(0, 1)
      }
  }
}

interface ContextState {
  data?: typeof initialState,
  dispatch?: React.Dispatch<Action>
}
const MyContenxt = React.createContext<ContextState>({})

const Setting = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className={styles.setting}>
      <h1>useReducer 和 useContext 的最佳实践</h1>
      <MyContenxt.Provider value={{
        data: state,
        dispatch,
      }}>
        <Card
          bordered={false}
        >
          <div className={styles.card}>
            <Avatar size={80} className={styles.avatar}>
              <img src="https://avatars.githubusercontent.com/u/42566669?v=4" />
            </Avatar>
            <div className={styles.content}>
              <UserInfo />
            </div>
          </div>
        </Card>
      </MyContenxt.Provider>
    </div>
  )
}
export default Setting

const UserInfo = () => {
  const {data, dispatch} = useContext(MyContenxt)
  const change = () => {
    dispatch && dispatch({
      type: 'update'
    })
  }
  return (
    <div>
      <Descriptions
        column={1}
        title='User Info'
        data={data?.data}
        style={{ marginBottom: 20 }}
        labelStyle={{ paddingRight: 36 }}
      />
      <Button onClick={change}>dispatch数据</Button>
    </div>

  )
}
