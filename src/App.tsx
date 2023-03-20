import './App.css'
import { useFetchData } from "./hooks/use_fetch_data";
import { outputFetchResult } from "./utils/output_fetch_result";
import { StarWarsCharacter, Character } from "./components/character";
import { API_BASE_URL } from "./config/config";

function App() {
  const { data, error, isFetching, status } = useFetchData<Character>(
    `${API_BASE_URL}/people/11/`
  );

  return (
    <div className="App">
      <h1>
        {isFetching ? (
          "Fetching..."
        ) : (
          <>
            {outputFetchResult(status, error, data, (data) => (
              <StarWarsCharacter name={data.name} />
            ))}
          </>
        )}
      </h1>
    </div>
  )
}

export default App
