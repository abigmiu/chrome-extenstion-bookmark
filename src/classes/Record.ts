export class Record {
  private title
  private url
  private favIconUrl

  constructor(
    title: string,
    url: string,
    favIconUrl: string,
  ) {
    this.title = title
    this.url = url
    this.favIconUrl = favIconUrl
  }
}
