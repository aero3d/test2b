/**
 * Created by aero on 07.11.16.
 */
export default function oif(url) {
  // const re = new RegExp('@?(https?:)?(\/\/)?((telegram|vk|vkontakte|twitter)[^\/]*\/)?([a-zA-Z0-9.]*)', 'i');
  const re = new RegExp('@?(https?:)?(\/\/)?(([a-zA-Z0-9.]*)[^\/]*\/)?([a-zA-Z0-9.]*)', 'i');
  return '@' + url.match(re)[5];
}
