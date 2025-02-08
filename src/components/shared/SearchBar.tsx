"use client"
import { FC, useEffect, useRef, useState } from "react";
import { Search } from 'lucide-react';
// interface SuggestionItem {
//   name: string;
//   // Add other properties if necessary
// }
// function useDebounce(value: string, delay: number) {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// }
const SearchBar: FC = () => {
  const [query, setQuery] = useState<string>("");
//   const { page, page_size } = useAppSelector((state) => state.paginatedProducts);
//   const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

//   const debouncedQuery = useDebounce(query, 500); // Debounce the query state

//   const { data } = useGetSuggestionsQuery({ page, page_size, search: debouncedQuery }, { skip: !debouncedQuery });

  // useEffect(() => {
  //   if (data) {
  //     const newSuggestions = data.data?.map((item: SuggestionItem) => item.name) || [];
  //     setSuggestions(newSuggestions);
  //     setShowSuggestions(true);
  //   } else {
  //     setSuggestions([]);
  //     setShowSuggestions(false);
  //   }
  // }, [data]);
//   useEffect(() => {
//     if (data && query) {
//       const newSuggestions = data.data?.map((item: SuggestionItem) => item.name) || [];
//       setSuggestions(newSuggestions);
//       setShowSuggestions(true);
//     } else {
//       setSuggestions([]);
//       setShowSuggestions(false);
//     }
//   }, [data, query]); 

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Check if the click occurred outside the suggestion box
      if (!event.target || !(event.target as HTMLElement).closest(".absolute.z-50")) {
        setShowSuggestions(false);
      }
    };


    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showSuggestions]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
  };

//   const navigate = useNavigate();
  const handleSearch = () => {
    // Perform search action here, e.g., navigate to '/search'
    if (query.trim() !== "") {
    //   navigate(`/search?q=${encodeURIComponent(query)}`);
      setShowSuggestions(false);
    }
  };
//   const handleSuggestionClick = (suggestion: string) => {
//     // Find the selected suggestion in the data
//     // dispatch(setSuggestion(suggestion));
//     const selectedProduct = data?.data?.find((item: SuggestionItem) => item.name === suggestion);

//     // Set the query to the full product name if found, otherwise use the suggestion
//     const selectedQuery = selectedProduct?.name || suggestion;

//     setQuery(selectedQuery);
//     setShowSuggestions(false);
//     // navigate(`/search?q=${encodeURIComponent(suggestion)}`);
//     setShowSuggestions(false);
//   };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && query.trim() !== "") {
      event.preventDefault(); // Prevent the default "Enter" behavior
    //   navigate(`/search?q=${encodeURIComponent(query)}`);
      setShowSuggestions(false);
    }
  };
  console.log('search')
  console.log('search')
  return (
    <div className="flex items-center bg-light rounded-[8px] xl:w-[614px] h-[40px] lg:h-[40px]">
      <div className="flex w-full h-full relative shadow-sm lg:shadow-none" ref={inputRef}>
        <input
          className="lg:bg-light outline-none placeholder:text-xs pl-4 w-full pb-1 rounded-l-[8px] focus:bg-white duration-300 pr-16 
          rounded-[8px]"
          type="text"
          placeholder="Search Products..."
          // onBlur={handleInputBlur}
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <div
          onClick={handleSearch}
          className="absolute right-0 lg:bg-main-primary  
          py-2 px-3 lg:px-6 text-white font-semibold rounded-[8px] cursor-pointer lg:border h-full lg:hover:bg-primary-dark duration-300"
        >
          <Search className="text-xl font-bold lg:text-white text-black-dim" />
        </div>
        {/* {showSuggestions && (
          <div className="absolute z-50 left-0 top-[42px] lg:top-12 mt-1 bg-white rounded shadow-md w-full">
            <Suggestion suggestions={suggestions} query={query} handleSuggestionClick={handleSuggestionClick} handleSearch={handleSearch} />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default SearchBar;
