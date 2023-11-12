declare type Address = {
  address1: string;
  address2: string;
  addressDisplay: string;
  city: string;
  city_state_zip_display: string;
  country_code: string;
  notes: string;
  phoneNumbers: PhoneNumbers;
  postalCode: string;
  stateProvince: string;
}

declare type PhoneNumbers = {
  countryCode: string;
  countryInfo: CountryInfo;
  isPrimary: boolean;
  phoneNumberExt: string;
  phoneType: string;
}

declare type CountryInfo = {
    countryCode: string;
    countryName: string;
    dialCode: string;
    display: string;
    friendlyName: string;
    hash: string;
}