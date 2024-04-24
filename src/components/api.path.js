const baseUrl = "https://final-prpject2024.onrender.com/api";
export default class ApiPath {
  static login = `${baseUrl}/user/login`;
  static register = `${baseUrl}/user/register`;
  static updateProfile = `${baseUrl}/user/update`;
  static updateProfileImage = `${baseUrl}/user/updateprofile`;
}
