import Video from "./Video"

export default interface Channel {
  relatedStreams: Video[];
  nextpage: string;
  avatarUrl: string;
  subscriberCount: number;
  name: string;
  bannerUrl: string;
  verified: boolean;
  tabs: ( { data: string; name: string } )[];
  description: string;
  id: string
}
