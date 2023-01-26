export interface ILink {
  article_link: string;
  video_link: string;
}

export interface ILaunchePast {
  id: string;
  details: string;
  upcoming: boolean;
  launch_success: boolean;
  mission_name: string;
  tentative_max_precision: string | null;
  links: ILink;
}
