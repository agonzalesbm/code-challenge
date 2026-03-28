import { useEffect, useMemo, useState } from 'react';
import { useDebounce } from './useDebounce';

export function Search({ data = ['orange', 'apple'] }) {
  const [searchValue, setSearchValue] = useState('');
  const debounceValue = useDebounce(searchValue, 1000);

  const filterList = useMemo(() => {
    if (debounceValue.length === 0) return [];

    return data.filter((item) => item.toLowerCase()
      .includes(debounceValue.toLowerCase()));
  }, [debounceValue, data]);

  useEffect(() => {
    console.log(filterList);
  }, [searchValue, filterList]);

  return (
    <>
      <input
        value={searchValue}
        type='search'
        placeholder='Search...'
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <ul>
        {filterList.length > 0 &&
          filterList.map((item) => (
            <li key={item}>{item}</li>
          ))
        }
      </ul>
    </>
  );
}
