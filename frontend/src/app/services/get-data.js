export default async function getData(path) {
  const resp = await fetch(`http://localhost:5000/data/${path}`);
  return await resp.json();
}
