// tslint:disable-next-line:eofline
// To retrieve episodes

export class Episode {
  id: number;
  name: string;
  seasonNumber: number;
  episodeNumber: number;
  airDate: Date;
  summary: string;

  constructor(episodeInfo) {
    this.id = episodeInfo.id;
    this.name = episodeInfo.name;
    this.seasonNumber = episodeInfo.season;
    this.episodeNumber = episodeInfo.episode;
    this.airDate = new Date(episodeInfo.airdate);
    this.summary = episodeInfo.summary;
  }
}

