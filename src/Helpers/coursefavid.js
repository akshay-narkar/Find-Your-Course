export default function coursefavs(fdata) {
  const favs = [];
  fdata.map((x) => (favs.push((x.course_id))));
  return favs;
//   console.log(favs);
}
