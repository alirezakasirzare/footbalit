// validator messages
const validatorMessages = {
  required: '{field} الرامی است',

  stringMax: '{field} نباید بیشتر از {expected} کاراکتر باشد',
  stringMin: '{field} نباید کمتر از {expected} کاراکتر باشد',
  string: '{field} باید متن باشد',
  stringEmpty: "'{field}' نباید خالی باشد",

  number: '{field} باید عدد باشد',
  numberMax: '{field} نباید بیشتر از {expected} باشد',
  numberMin: '{field} نباید کمتر از {expected} باشد',

  equalField: '{field} باید با فیلد رمز برابر باشد', //this expected is static -> if you need you should change this latter

  email: '{field} باید ایمیل معتبری باشد',
  emailMax: '{field} نباید بیشتر از {expected} کاراکتر باشد',

  enumValue: '{field} معتیر نیست',
  arrayEnum: '{field} معتیر نیست',

  array: '{field} باید یک لیست باشد',

  objectID: '{field} باید آیدی معتبری باشد',

  date: '{field} باید تاریخ معتبری باشد',

  object: '{field} باید یک آبجکت باشد',
};

// validator labels
const validatorLabels = {
  country: 'نام کشور',
  first_name: 'نام کوچک',
  last_name: 'نام خانوادگی',
  email: 'ایمیل',
  password: 'رمز',
  confrim_password: 'تایید رمز',
  user_email: 'ایمیل کاربر',
  role: 'نقش کاربر',
  permissions: 'لیست دسترسی ها',
  league: 'لیگ',
  team: 'تیم',
  cups: 'لیست جام ها',
  name: 'نام',
  number: 'شماره',
  course: 'دوره',
  team_one: 'تیم اول',
  team_two: 'تیم دوم',
  date: 'تاریخ',
  status: 'وضعیت',
  minute: 'دقیقه',
  data: 'اطلاعات',
  game: 'بازی',
  type: 'نوع',
  title: 'عنوان',
  text: 'متن',
  source: 'منبع',
  tags: 'لیست تگ ها',
  news: 'خبر',
  code: 'کد',
};

module.exports = {
  validatorMessages,
  validatorLabels,
};
