import React from 'react';
import { userService } from './services/userService';
import './custom.css';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: null,
      userList: []
    };
  }

  async fetchUserList() {
    this.controller = new AbortController();
    const { signal } = this.controller;
    try {
      const userList = await userService.getUsers({ signal });
      console.log(userList);
      this.setState({
        userList,
      });
    } catch (error) {
      this.setState({
        error: error.message || 'Something went error'
      });
    } finally {
      this.setState({
        isLoading: false
      });
    }
  }

  async componentDidMount() {
    await this.fetchUserList();
  }

  componentWillUnmount() {
    this.controller.abort();
  }

  render() {
    return (
      <>
        <div className='center-div'>
          <ul>
            {this.state.userList.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
        <div className='center-button'>
          <button onClick={this.fetchUserList} className='button-style'>Fetch users</button>
        </div>
      </>
    );
  }
}

export default UserList;
