import { v as useCookie } from './server.mjs';
import 'vue';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@primevue/core/base/style';
import '@primeuix/styled';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@primeuix/utils/object';
import '@primeuix/utils/dom';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import 'vue/server-renderer';

const Edit$1 = "Edit";
const Add$1 = "Add";
const Close$1 = "Close";
const Delete$1 = "Delete";
const Send$1 = "Send";
const Message$1 = "Message";
const Phone$1 = "Phone";
const Email$1 = "Email";
const Name$1 = "Name";
const News$1 = "News";
const PhotoAlbum$1 = "Photo Album";
const Video$1 = "Video";
const SeeMore$1 = "See More";
const LastName$1 = "Last Name";
const FirstName$1 = "First Name";
const Login$1 = "Login";
const Register$1 = "Register";
const confirmPassword$1 = "Confirm Password";
const phone$1 = "Phone Number";
const password$1 = "Password";
const email$1 = "Email";
const optional$1 = "Optional";
const address$1 = "Address";
const City$1 = "City";
const Place$1 = "Place";
const PlaceOrResort$1 = "Place or resort";
const Completed$1 = "Completed";
const Ordered$1 = "Ordered";
const Processing$1 = "Processing";
const Shipping$1 = "Shipping";
const Deliverd$1 = "Deliverd";
const OrderTracking$1 = "Order Tracking";
const Back$1 = "Back";
const Pending$1 = "Pending";
const gender$1 = "Gender";
const Male$1 = "Male";
const Female$1 = "Female";
const birthDate$1 = "Birth Date";
const mailBox$1 = "Mail Box";
const fax$1 = "Fax";
const male$1 = "Male";
const female$1 = "Female";
const AboutUs$1 = "About Us";
const ContactUs$1 = "Contact Us";
const Catalogues$1 = "Catalogues";
const OurPartners$1 = "Our Partners";
const UsefulLinks$1 = "Useful Links";
const Categories$1 = "Categories";
const ShopNow$1 = "Shop Now";
const ReadMore$1 = "Read More";
const NewCollections$1 = "New Collections";
const Chairs$1 = "Chairs";
const OfficeFurniture$1 = "Office Furniture";
const Sofa$1 = "Sofa";
const OrderNow$1 = "Order Now";
const PhoneNumber$1 = "Phone Number";
const SingUp$1 = "Sing Up";
const Home$1 = "Home";
const Products$1 = "Products";
const en = {
  Edit: Edit$1,
  Add: Add$1,
  Close: Close$1,
  Delete: Delete$1,
  Send: Send$1,
  Message: Message$1,
  Phone: Phone$1,
  Email: Email$1,
  Name: Name$1,
  News: News$1,
  PhotoAlbum: PhotoAlbum$1,
  Video: Video$1,
  SeeMore: SeeMore$1,
  LastName: LastName$1,
  FirstName: FirstName$1,
  Login: Login$1,
  Register: Register$1,
  "Full Name En": "Full Name",
  "Full Name Ar": "Full Name",
  confirmPassword: confirmPassword$1,
  phone: phone$1,
  password: password$1,
  email: email$1,
  optional: optional$1,
  "Current-Password": "Current Password",
  "New-Password": "New Password",
  "Change-Password": "Change Password",
  address: address$1,
  City: City$1,
  Place: Place$1,
  PlaceOrResort: PlaceOrResort$1,
  Completed: Completed$1,
  Ordered: Ordered$1,
  Processing: Processing$1,
  Shipping: Shipping$1,
  Deliverd: Deliverd$1,
  OrderTracking: OrderTracking$1,
  Back: Back$1,
  Pending: Pending$1,
  gender: gender$1,
  Male: Male$1,
  Female: Female$1,
  birthDate: birthDate$1,
  mailBox: mailBox$1,
  fax: fax$1,
  male: male$1,
  female: female$1,
  "Company Website": "Company Website",
  AboutUs: AboutUs$1,
  ContactUs: ContactUs$1,
  Catalogues: Catalogues$1,
  OurPartners: OurPartners$1,
  UsefulLinks: UsefulLinks$1,
  "Baddar Furniture": "Nabtaty",
  Categories: Categories$1,
  ShopNow: ShopNow$1,
  ReadMore: ReadMore$1,
  NewCollections: NewCollections$1,
  Chairs: Chairs$1,
  OfficeFurniture: OfficeFurniture$1,
  Sofa: Sofa$1,
  OrderNow: OrderNow$1,
  "Register a company account": "Register a company account",
  PhoneNumber: PhoneNumber$1,
  "Responsible Person mobile number": "Responsible Person mobile number",
  SingUp: SingUp$1,
  Home: Home$1,
  Products: Products$1
};
const Edit = "\u062A\u0639\u062F\u064A\u0644";
const Add = "\u0625\u0636\u0627\u0641\u0629";
const Close = "\u0625\u063A\u0644\u0627\u0642";
const Delete = "\u062D\u0630\u0641";
const Send = "\u0623\u0631\u0633\u0644";
const Message = "\u0627\u0644\u0631\u0633\u0627\u0644\u0629";
const Phone = "\u0627\u0644\u0647\u0627\u062A\u0641";
const Email = "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A";
const Name = "\u0627\u0644\u0627\u0633\u0645";
const Video = "\u0627\u0644\u0641\u064A\u062F\u064A\u0648";
const PhotoAlbum = "\u0623\u0644\u0628\u0648\u0645 \u0627\u0644\u0635\u0648\u0631";
const News = "\u0627\u0644\u0623\u062E\u0628\u0627\u0631";
const SeeMore = "\u0634\u0627\u0647\u062F \u0627\u0644\u0645\u0632\u064A\u062F";
const LastName = "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u062E\u064A\u0631";
const FirstName = "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0644";
const Login = "\u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644";
const Register = "\u062A\u0633\u062C\u064A\u0644 \u062C\u062F\u064A\u062F";
const confirmPassword = "\u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631";
const phone = "\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644";
const email = "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A";
const password = "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631";
const optional = "\u0627\u062E\u062A\u064A\u0627\u0631\u064A";
const address = "\u0627\u0644\u0639\u0646\u0648\u0627\u0646";
const City = "\u0627\u0644\u0645\u062F\u064A\u0646\u0629";
const Place = "\u0627\u0644\u0645\u0643\u0627\u0646";
const PlaceOrResort = "\u0627\u0644\u0645\u0643\u0627\u0646 \u0627\u0648 \u0627\u0644\u0645\u0646\u062A\u062C\u0639";
const Completed = "\u0645\u0643\u062A\u0645\u0644";
const Ordered = "\u062A\u0645 \u0627\u0644\u0637\u0644\u0628";
const Processing = "\u062A\u062A\u0645 \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629";
const Shipping = "\u064A\u062A\u0645 \u0627\u0644\u0634\u062D\u0646";
const Deliverd = "\u062A\u0645 \u0627\u0644\u0627\u0633\u062A\u0644\u0627\u0645";
const OrderTracking = "\u062A\u0639\u0642\u0628 \u0627\u0644\u0637\u0644\u0628\u064A\u0629";
const Back = "\u0631\u062C\u0648\u0639";
const Pending = "\u0627\u0646\u062A\u0638\u0627\u0631";
const gender = "\u0627\u0644\u062C\u0646\u0633";
const Male = "\u0630\u0643\u0631";
const Female = "\u0627\u0646\u062B\u0649";
const birthDate = "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F";
const mailBox = "\u0635\u0646\u062F\u0648\u0642 \u0627\u0644\u0628\u0631\u064A\u062F";
const fax = "\u0627\u0644\u0641\u0627\u0643\u0633";
const male = "\u0630\u0643\u0631";
const female = "\u0627\u0646\u062B\u0649";
const AboutUs = "\u0645\u0646 \u0646\u062D\u0646";
const ContactUs = "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627";
const Catalogues = "\u0643\u062A\u0627\u0644\u0648\u062C\u0627\u062A";
const OurPartners = "\u0634\u0631\u0643\u0627\u0624\u0646\u0627";
const UsefulLinks = "\u0631\u0648\u0627\u0628\u0637 \u0645\u0641\u064A\u062F\u0629";
const Categories = "\u0627\u0644\u0641\u0626\u0627\u062A";
const ShopNow = "\u062A\u0633\u0648\u0642 \u0627\u0644\u0622\u0646";
const ReadMore = "\u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u0632\u064A\u062F";
const NewCollections = "\u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0627\u062A \u0627\u0644\u062C\u062F\u064A\u062F\u0629";
const Chairs = "\u0627\u0644\u0643\u0631\u0627\u0633\u064A";
const OfficeFurniture = "\u0623\u062B\u0627\u062B \u0645\u0643\u062A\u0628\u064A";
const Sofa = "\u0623\u0631\u064A\u0643\u0629";
const OrderNow = "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646";
const PhoneNumber = "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641";
const SingUp = "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644";
const Home = "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629";
const Products = "\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A";
const ar = {
  Edit,
  Add,
  Close,
  Delete,
  Send,
  Message,
  Phone,
  Email,
  Name,
  Video,
  PhotoAlbum,
  News,
  SeeMore,
  LastName,
  FirstName,
  Login,
  Register,
  "Full Name En": "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644",
  "Full Name Ar": "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644",
  confirmPassword,
  phone,
  email,
  password,
  optional,
  "Current-Password": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062D\u0627\u0644\u064A\u0629",
  "New-Password": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629",
  "Change-Password": "\u062A\u063A\u064A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
  address,
  City,
  Place,
  PlaceOrResort,
  Completed,
  Ordered,
  Processing,
  Shipping,
  Deliverd,
  OrderTracking,
  Back,
  Pending,
  gender,
  Male,
  Female,
  birthDate,
  mailBox,
  fax,
  male,
  female,
  "Company Website": "\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0644\u0644\u0634\u0631\u0643\u0629",
  AboutUs,
  ContactUs,
  Catalogues,
  OurPartners,
  UsefulLinks,
  "Baddar Furniture": "\u0646\u0628\u062A\u062A\u064A",
  Categories,
  ShopNow,
  ReadMore,
  NewCollections,
  Chairs,
  OfficeFurniture,
  Sofa,
  OrderNow,
  "Register a company account": "\u062A\u0633\u062C\u064A\u0644 \u062D\u0633\u0627\u0628 \u0634\u0631\u0643\u0629",
  PhoneNumber,
  "Responsible Person mobile number": "\u0631\u0642\u0645 \u0645\u0648\u0628\u0627\u064A\u0644 \u0627\u0644\u0634\u062E\u0635 \u0627\u0644\u0645\u0633\u0624\u0648\u0644",
  SingUp,
  Home,
  Products
};
const i18n_config = () => {
  var _a;
  return {
    legacy: true,
    locale: (_a = useCookie("lang").value) != null ? _a : "en",
    messages: {
      en,
      ar
    }
  };
};

export { i18n_config as default };
//# sourceMappingURL=i18n.config-CQ_Eu2bR.mjs.map
