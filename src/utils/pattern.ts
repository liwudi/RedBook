const pattern = {
  phone: /^(1[3-9])\d{9}$/,
  password:
    /^[a-zA-Z0-9~`!@#\$%\^&\*\(\)_\+\{\}\|:"<>\?\-=\[\]\;',\\.\/]{6,20}$/,
  code: /^\d{6}$/,
  carCode: /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/i,
  identityCard:
    /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|x)$/i,
};

export default pattern;
