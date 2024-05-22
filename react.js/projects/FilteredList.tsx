import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// FilteredList.tsx
// Define the type for individual list items
interface ListItem {
  id: number;
  name: string;
}
// Define props for the FilteredList component
interface FilteredListProps {
  items: ListItem[];
}
const FilteredList: React.FC<FilteredListProps> = ({ items }) => {
  // State to hold the filtered list and the search term
  const [filter, setFilter] = useState('');
  const [filteredItems, setFilteredItems] = useState<ListItem[]>([]);

  // Effect to filter items based on the filter state
  useEffect(() => {
    const result = items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredItems(result);
  }, [filter, items]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default FilteredList;
// ===============================================
// App.tsx
const App: React.FC = () => {
  const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' }
  ];
  return (
    <div>
      <h1>Filtered List</h1>
      <FilteredList items={items} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
