
import './App.css';
import {useGetAllPostQuery} from './Services/Post';
function App() {
  const responseInfo=useGetAllPostQuery()

  console.log("Response Information:",responseInfo)
  console.log("Data:",responseInfo.data)

  if(responseInfo.isLoading)return <div>Loading....</div>
  if(responseInfo.isError)return <div>An error is occured{responseInfo.error.error}</div>
  
  return (

    <div className='App'>
      <h1>Redux Toolkit(Get All Data)</h1>
      {
        responseInfo.data.map((post)=>
        <div>
          <h3>{post.id}{post.title}{post.body}</h3>
          
        </div>
        )
      }
    </div>

  );
}

export default App;
