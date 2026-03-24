The Class Component Foundation
Goal: Master lifecycle methods and the this keyword.

Challenge 1: The Lifecycle Tracker (Easy)
Create a class component called Timer.

Requirements:
- Initialize a count state at 0.
- Use componentDidMount to start an interval that increments count every second.
- Use componentWillUnmount to clear the interval (preventing memory leaks).
- Display the count in the UI.

___

Challenge 2: The Data Fetcher (Medium)
Create a class component UserList.

Requirements:
- Fetch data from https://jsonplaceholder.typicode.com/users inside componentDidMount.
- Handle a loading state and an error state.
- Implement a "Refresh" button that triggers the fetch again.
- Bonus: Use componentDidUpdate to re-fetch data only if a categoryId prop changes.
