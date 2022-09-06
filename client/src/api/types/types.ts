export interface ILoginForm {
  username: string;
  password: string;
}

export interface IQuestionList {
  title: string;
  content: string;
  questionId: number;
  memberId: number;
  email: string;
  nickname: string;
  createdAt: number;
  updatedAt: number;
}

export interface IQuestionDetail {
  title: string;
  content: string;
  questionId: number;
  member: IMember;
  createdAt: number;
  updatedAt: number;
}

export interface IMember {
  memberId: number;
  email: string;
  password: string;
  nickname: string;
  createdAt: number;
  modifiedAt: number;
}

export interface IComment {
  comment: string;
  member: IMember;
  createdAt: string;
}
