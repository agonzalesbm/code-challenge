# Challenge 3
- Take `Timer` and `UserList` and rewrite them entirely as functional components.
- Ensure the interaval in the timer is cleaned up properly using the effect's return function.

# Challenge 4
- Create a custom hook called `useFetch`.
  - The hook should take a `url` as an argument.
  - I should return `{ data, loading, error }`.
  - Use this hook inside a new compoent `PostList` to display blog posts.

# Challenge 5
- Create a `Search` component that allow to filter a object list with the next structure:

```js
const bigListData = [
  { id: 1, name: "Apple iPhone 15"},
  { id: 2, name: "Samsung Galaxy s23"},
  { id: 3, name: "Google Pixel 8"},
  // ... imagine, 4,997 more items here
];
```

- Use `useMemo` to ensure the filtering logic only runs when the search query or the list changes.
- Implement **Debouncing** (delaying the search until the user stops typing for 300ms). It's possible to use custom hooks for that.
