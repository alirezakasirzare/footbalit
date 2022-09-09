// validator messages
const validatorMessages = {
  required: '{field} الرامی است',
  stringMax: '{field} نباید بیشتر از {expected} کاراکتر باشد',
  stringMin: '{field} نباید کمتر از {expected} کاراکتر باشد',
  equalField: '{field} باید با فیلد رمز برابر باشد', //this expected is static -> if you need you should change this latter
  string: '{field} باید متن باشد',
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
};

module.exports = {
  validatorMessages,
  validatorLabels,
};
