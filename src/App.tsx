import { Calendar } from './components/Calendar';
import "../src/styles.css";
import { EventsProvider } from './contexts/Events';

export default function App() {
  return <EventsProvider><Calendar /> </EventsProvider>
}
