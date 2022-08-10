import Map from "./Map";
import {
  useLoadScript,
} from "@react-google-maps/api";

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return (<div><h1>Loading...</h1></div>)
  } else {
    return (<div><Map /></div>)
  }
}

export default App;
