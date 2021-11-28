import { Provider } from "react-redux";
import store from "../lib/redux";

import InboxScreen from "../stories/components/InboxScreen/InboxScreen";

export default function Home() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}
