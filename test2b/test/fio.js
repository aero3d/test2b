/**
 * Created by aero on 07.11.16.
 */

export default function getShortFullName(fio) {
  const fioTrim = fio.trim();
  const reExp = new RegExp('([A-ZА-ЯЁ^\D][a-zа-яё\D]+[\-\s]?){1,3}');
  const reNum = new RegExp('[0-9_/]', 'i');
  // const reNum = new RegExp('[^\Sa-zа-яё]', 'i');
  // console.log(fioTrim.match(reExp));
  // console.log(fioTrim.match(reNum));
  if (fioTrim.match(reNum) == null && fioTrim.match(reExp) != null) {
    const re = fioTrim.split(/ /);
    if (re != null) {
      if (re.length == 1) {
        console.log(1);
        return re[0];
      } else if (re.length == 2) {
        console.log(2);
        console.log(re[1]);
        return re[1] + ' ' + re[0].charAt(0) + '.';
      } else if (re.length == 3) {
        console.log(3);
        return re[2] + ' ' + re[0].charAt(0) + '.'  + ' ' + re[1].charAt(0) + '.';
      } else {
        return 'Invalid fullname';
      }
    }
    return 'Invalid fullname';
  }
  return 'Invalid fullname';
}
