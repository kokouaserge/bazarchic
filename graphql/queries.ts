export const launchesPastQuery = `query Root{
 launchesPast {
   id
   details
   launch_success
   mission_name
   upcoming
   tentative_max_precision
   links {
     article_link
 video_link
   }
 }
}
`;
