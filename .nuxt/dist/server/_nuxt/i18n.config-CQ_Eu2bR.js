import { v as useCookie } from "../server.mjs";
import "vue";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "devalue";
import "destr";
import "@primeuix/styled";
import "@primeuix/utils/object";
import "@primeuix/utils/dom";
import "@primeuix/utils/eventbus";
import "@primeuix/utils";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
import "vue/server-renderer";
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
const Edit = "تعديل";
const Add = "إضافة";
const Close = "إغلاق";
const Delete = "حذف";
const Send = "أرسل";
const Message = "الرسالة";
const Phone = "الهاتف";
const Email = "البريد الإلكتروني";
const Name = "الاسم";
const Video = "الفيديو";
const PhotoAlbum = "ألبوم الصور";
const News = "الأخبار";
const SeeMore = "شاهد المزيد";
const LastName = "الاسم الأخير";
const FirstName = "الاسم الأول";
const Login = "تسجيل دخول";
const Register = "تسجيل جديد";
const confirmPassword = "تأكيد كلمة المرور";
const phone = "رقم الموبايل";
const email = "البريد الإلكتروني";
const password = "كلمة المرور";
const optional = "اختياري";
const address = "العنوان";
const City = "المدينة";
const Place = "المكان";
const PlaceOrResort = "المكان او المنتجع";
const Completed = "مكتمل";
const Ordered = "تم الطلب";
const Processing = "تتم المعالجة";
const Shipping = "يتم الشحن";
const Deliverd = "تم الاستلام";
const OrderTracking = "تعقب الطلبية";
const Back = "رجوع";
const Pending = "انتظار";
const gender = "الجنس";
const Male = "ذكر";
const Female = "انثى";
const birthDate = "تاريخ الميلاد";
const mailBox = "صندوق البريد";
const fax = "الفاكس";
const male = "ذكر";
const female = "انثى";
const AboutUs = "من نحن";
const ContactUs = "اتصل بنا";
const Catalogues = "كتالوجات";
const OurPartners = "شركاؤنا";
const UsefulLinks = "روابط مفيدة";
const Categories = "الفئات";
const ShopNow = "تسوق الآن";
const ReadMore = "اقرأ المزيد";
const NewCollections = "المجموعات الجديدة";
const Chairs = "الكراسي";
const OfficeFurniture = "أثاث مكتبي";
const Sofa = "أريكة";
const OrderNow = "اطلب الآن";
const PhoneNumber = "رقم الهاتف";
const SingUp = "تسجيل الدخول";
const Home = "الصفحة الرئيسية";
const Products = "المنتجات";
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
  "Full Name En": "الاسم الكامل",
  "Full Name Ar": "الاسم الكامل",
  confirmPassword,
  phone,
  email,
  password,
  optional,
  "Current-Password": "كلمة المرور الحالية",
  "New-Password": "كلمة المرور الجديدة",
  "Change-Password": "تغيير كلمة المرور",
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
  "Company Website": "الموقع الإلكتروني للشركة",
  AboutUs,
  ContactUs,
  Catalogues,
  OurPartners,
  UsefulLinks,
  "Baddar Furniture": "نبتتي",
  Categories,
  ShopNow,
  ReadMore,
  NewCollections,
  Chairs,
  OfficeFurniture,
  Sofa,
  OrderNow,
  "Register a company account": "تسجيل حساب شركة",
  PhoneNumber,
  "Responsible Person mobile number": "رقم موبايل الشخص المسؤول",
  SingUp,
  Home,
  Products
};
const i18n_config = () => ({
  legacy: true,
  locale: useCookie("lang").value ?? "en",
  messages: {
    en,
    ar
  }
});
export {
  i18n_config as default
};
//# sourceMappingURL=i18n.config-CQ_Eu2bR.js.map
