export interface UserPayload {
  id?: string;
  fullName: string;
  email: string;
  identityNumber: string;
  gender: string;
  tickets: {
    [tribune: string]: number;
  };
}
