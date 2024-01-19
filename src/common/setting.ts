
class Setting {
  private readonly GEO_API_KEY: string = import.meta.env.VITE_SOME_KEY || "";
  private readonly WebhookChannel: string = import.meta.env.VITE_CHANNEL || ""

  getGeoAPIKey(): string {
    return this.GEO_API_KEY;
  }
  getWebhookChannel(): string {
    return this.WebhookChannel;
  }
}

const SETTING = new Setting();
export default SETTING;
