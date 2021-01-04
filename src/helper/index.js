// import {removeArrItem} from './arrayHelpers'


const getValidUrl = (url) => {
  let newUrl = url;
  newUrl = newUrl.trim().replace(/\s/g, "");

  if (/^(:\/\/)/.test(newUrl)) {
    return `http${newUrl}`;
  }
  if (!/^(f|ht)tps?:\/\//i.test(newUrl)) {
    return `http://${newUrl}`;
  }

  return newUrl;
};

const getValidPhoneNumber = (numb) => {
  let phoneNu = numb;
  // phoneNu = phoneNu.trim().replace(/\s/g, "");
  if (/^(0)/.test(phoneNu) && phoneNu.length === 11) {
    return phoneNu.replace(/^(0)/, "+91");
  }
  if (/^(91)/.test(phoneNu) && phoneNu.length === 12) {
    return phoneNu.replace(/^(91)/, "+91");
  }
  if (/^(\+91)/.test(phoneNu) && phoneNu.length === 13) {
    return phoneNu;
  }

  return "+91" + phoneNu;
};


export {
  // removeArrItem, 
  getValidUrl, getValidPhoneNumber};