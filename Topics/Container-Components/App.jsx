import { ResourceLoader } from "./components/resource-loader";
import { UserInfo } from "./components/user-info";
import { BookInfo } from "./components/book-info";
import { DataSource } from "./components/data-source";
import { DataSourceWithRender } from "./components/data-source-with-render";
import axios from "axios";

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const getDataFromLocalStorae = (key) => {
  return localStorage.getItem(key);
};

const Message = ({ msg }) => <h1>{msg}</h1>;

function App() {
  return (
    <>
      <ResourceLoader resourceUrl={"/users/2"} resourceName={"user"}>
        <UserInfo />
      </ResourceLoader>

      <DataSource
        getData={() => getDataFromServer("/books/2")}
        resourceName={"book"}
      >
        <BookInfo />
      </DataSource>

      <DataSource
        getData={() => getDataFromLocalStorae("test")}
        resourceName={"msg"}
      >
        <Message />
      </DataSource>

      <DataSourceWithRender
        getData={() => getDataFromServer("/users/2")}
        render={(resource) => <UserInfo user={resource} />}
      >
        <BookInfo />
      </DataSourceWithRender>
    </>
  );
}

export default App;
