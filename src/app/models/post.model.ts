export interface Post {

  id?: number;
  title: string;
  description: string;
  age: string;
  image?: string;
  tags?: string[];
  privacy: string;
  postedOn: Date;
  postedBy: string;
}
