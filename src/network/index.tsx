import axios, {AxiosRequestConfig} from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export async function invokeApi({
  url,
  method = 'GET',
  headers = {},
  queryParams = {},
  postData = {},
}: any) {
  let reqObj: AxiosRequestConfig = {
    method: method,
    url,
    headers: {
      ...headers,
    },
  };

  console.log('invokeApi', {reqObj, postData, queryParams});

  if (method === 'POST' || method === 'PUT') {
    reqObj['data'] = postData;
  } else {
    reqObj['params'] = queryParams;
  }
  let results = undefined;
  try {
    results = await axios(reqObj);
    console.log('invokeApi', {results});
    return results.data;
  } catch (error: any) {
    console.log({error}, 'invokeApi');
    throw Error(error?.message || 'Something went wrong');
  }
}
