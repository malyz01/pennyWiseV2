export interface IProfile {
  id: string;
  fullName: string;
  avatar: string;
}

export interface IUser {
  id: string;
  email: string;
  profile: IProfile;
}
