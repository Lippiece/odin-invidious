export default interface Instance {
  name: string;
  api_url: string;
  locations: string;
  version: string;
  up_to_date: boolean;
  cdn: boolean;
  registered: number;
  cache: boolean;
  last_checked: number;
  s3_enabled: boolean;
}
