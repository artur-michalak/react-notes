export default class BaseUrl {
  private static _instance: BaseUrl;
  private static _url: string;
  private constructor() {}

  public static get api() {
    if (!BaseUrl._instance) {
      if (typeof window !== 'undefined') return;
      if (process.env.VERCEL_URL)
        BaseUrl._url = `https://${process.env.VERCEL_URL}/api`;
      else BaseUrl._url = "http://localhost:3000/api";
      BaseUrl._instance = this;
      return BaseUrl._url;
    }

    return BaseUrl._url;
  }
}
