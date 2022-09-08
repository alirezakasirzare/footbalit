// validator messages
const validatorMessages = {
  required: '{field} الرامی است',
  stringMax: '{field} نباید بیشتر از {expected} کاراکتر باشد',
  string: '{field} باید متن باشد',
};

// validator fields name
const validatorFeilds = {
  persian_name: 'persian_name',
  english_name: 'english_name',
  country: 'country',
};

// validator labels
const validatorLabels = {
  [validatorFeilds.persian_name]: 'نام فارسی',
  [validatorFeilds.english_name]: 'نام انگلیسی',
  [validatorFeilds.country]: 'نام کشور',
};

module.exports = {
  validatorMessages,
  validatorLabels,
  validatorFeilds,
};
