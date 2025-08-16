export function getAge(): number {
  const myBirthday:Date = new Date(2003, 7, 11);
  const today:Date = new Date();
  
  let age:number = today.getFullYear() - myBirthday.getFullYear();
  const hasHadBirthdayThisYear:boolean =
    today.getMonth() > myBirthday.getMonth() ||
    (today.getMonth() === myBirthday.getMonth() &&
      today.getDate() >= myBirthday.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }
  return age;
}
