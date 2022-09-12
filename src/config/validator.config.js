// validator messages
const validatorMessages = {
  required: '{field} الرامی است',

  stringMax: '{field} نباید بیشتر از {expected} کاراکتر باشد',
  stringMin: '{field} نباید کمتر از {expected} کاراکتر باشد',
  string: '{field} باید متن باشد',

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
};

// validator labels
const validatorLabels = {
  persian_name: 'نام فارسی',
  english_name: 'نام انگلیسی',
  country: 'نام کشور',
  firat_name: 'نام کوچک',
  last_name: 'نام خانوادگی',
  email: 'ایمیل',
  password: 'رمز',
  confrim_password: 'تایید رمز',
  user_email: 'ایمیل کاربر',
  role: 'نقش کاربر',
  permissions: 'لیست دسترسی ها',
  league: 'لیگ',
  team: 'تیم',
  cups: 'جام ها',
  name: 'اسم',
  number: 'شماره',
  course: 'دوره',
};

module.exports = {
  validatorMessages,
  validatorLabels,
};
