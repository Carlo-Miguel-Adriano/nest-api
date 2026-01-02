export class CreatePostDto {
  slug: string;
  title?: string;
  content?: string;
  author_id: bigint;
  image_id?: bigint;
}
