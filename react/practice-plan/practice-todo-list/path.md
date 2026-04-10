- Create a todo list with a grid of 3 colums

## Components
- TaskCard:
  - Labels e.g:
```js
const task = {
  description: '',
  completed: true || false
}
```
  - Can be edited and deleted
- TaskGrid:
  - Grid with 3 columns that contain the tasks

## App flux
- TaskGrid contain the main data(arr)
- TaskGrid use a TaskCard that get the data from the principal arr
- TaskCard have the next structure:
  - Checked box (should update the state onClick)
  - Description (p)
  - Delete and edit button
  - Edit button should edit the description
- TaskCard use the index like key/id

- Implement a useContext and local storage
