// tslint:disable-next-line:eofline
// To retrieve episodes

export class Episode {
  id: number;
  name: string;
  seasonNumber: number;
  episodeNumber: number;
  airDate: Date;
  summary: string;
  fullNumber: string;

  constructor(episodeInfo) {
    this.id = episodeInfo.id;
    this.name = episodeInfo.name;
    this.seasonNumber = episodeInfo.season;
    this.episodeNumber = episodeInfo.episode;
    this.airDate = new Date(episodeInfo.airdate);
    this.summary = episodeInfo.summary;
    this.fullNumber = `S${(episodeInfo.season > 9) ? episodeInfo.season : '0' + episodeInfo.season }E${(episodeInfo.episode > 9) ? episodeInfo.episode : '0' + episodeInfo.episode }`;
  }
}

