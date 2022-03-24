import React, { Component } from 'react'

const UserContext = new React.createContext({
  nickName: '小小石',
  level: -1
})

class ProfileHeader extends Component {
  render() {
    console.log(this.context)
    const { nickName, level } = this.context
    return (
      <div>
        <h2>昵称：{nickName}</h2>
        <h2>等级：{level}</h2>
      </div>
    )
  }
}

ProfileHeader.contextType = UserContext

function Profile() {
  return (
    <div>
      <div>我是profile组件</div>
      <ProfileHeader />
    </div>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nickName: '小小陈',
      level: 99
    }
  }

  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>

        {/* 使用 UserContext 的默认值 */}
        <Profile />
      </div>
    )
  }
}
