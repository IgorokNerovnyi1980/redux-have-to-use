import { useMemo } from 'react'
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from 'react-router-dom'
import queryString from 'query-string'

// HAVE TO USE
//function MyComponent(){
// Get the router object
// const router = useRouter();

// Get value from query string (?postId=123) or route param (/:postId)
// console.log(router.query.postId);

// Get current pathname
// console.log(router.pathname)

// Navigate with with router.push()
//     return (
//       <button onClick={(e) => router.push('/about')}>About</button>
//     );
//   }

export default () => {
  const params = useParams()
  const location = useLocation()
  const history = useHistory()
  const match = useRouteMatch()
  return useMemo(() => {
    return {
      back: history.goBack,
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search), // Convert string to object
        ...params,
      },
      match,
      location,
      history,
    }
  }, [params, match, location, history])
}
