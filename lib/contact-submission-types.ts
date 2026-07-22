export type ContactSubmissionDTO = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  createdAt: string;
};

export type ContactSubmissionInput = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};
