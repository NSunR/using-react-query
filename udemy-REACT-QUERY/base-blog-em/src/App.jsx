import { Posts } from "./Posts";
import "./App.css";

//6. App컴포넌트에서 React Query용 쿼리 클라이언트를 만들고
//7. 모든 자식 컴포넌트가 클라이언트를 사용할 수 있게 QueryProvider를 추가할거야.
//8. 이제 React Query에서 필요한 걸 가져올거야.
//9. QueryClient, QueryClientProvider가 일단 필요해.
import { QueryClient, QueryClientProvider } from "react-query";

//10. QueryCLient를 만들어볼거야
const queryClient = new QueryClient();
//11. 이제 클라이언트가 있어서 Query~Provider를 추가할 수 있어.
//그러면 QueryProvider가 클라이언트를 prop으로 사용하게 되서
//클라이언트가 가지고 있는 캐시와 모든 기본 옵션을 Query~Provider의
//자식 컴포넌트도 사용할 수 있게 돼.

function App() {
  return (
    // provide React Query client to App
    // 이게 10에서 만든 QueryClient야.
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Blog Posts</h1>
        <Posts />
      </div>
    </QueryClientProvider>
    //이제 이 안에 있는 모든 건 ReactQuery 훅(hook)을 사용할 수 있어.
  );
}

export default App;
