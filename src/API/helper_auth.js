export default function helperauth() {
  const sessh = JSON.parse(sessionStorage.getItem('uid'));

  const params = {
    uid: sessh.uid,
    client: sessh.client,
    'access-token': sessh['access-token'],
  };

  return params;
}
