export class Post {
  id: bigint;
  slug: string;
  title?: string;
  content?: string;
  author_id: bigint;
  image_id?: bigint;
  createdAt: Date;
  updatedAt: Date;
}
