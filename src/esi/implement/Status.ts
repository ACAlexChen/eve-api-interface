import { ESIExtendsClass, ESIHttpInput } from "../../f"
import * as type from '../interface/Status'
import { Context, HTTP } from "koishi"
import eveAPI from "../.."

export class Status extends ESIExtendsClass<typeof type> implements type.Status {
  constructor(ctx: Context, cfg: eveAPI.Config) {
    super(ctx, cfg)
    this._log = this.createLogFunction(__filename, Status.name)
    this.type = type
  }

  public async retrieveTheUptimeAndPlayerCounts(query: type.retrieveTheUptimeAndPlayerCounts['query'] = {}, headers: type.retrieveTheUptimeAndPlayerCounts['headers'] = {}, url: type.retrieveTheUptimeAndPlayerCounts['url'] = '/status/', otherOptions: HTTP.RequestConfig = {}): Promise<type.retrieveTheUptimeAndPlayerCounts['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.retrieveTheUptimeAndPlayerCounts['responses'][200]['model'], ESIHttpInput<type.retrieveTheUptimeAndPlayerCounts['query'], undefined, undefined, type.retrieveTheUptimeAndPlayerCounts['headers'], type.retrieveTheUptimeAndPlayerCounts['url']>, typeof type>(this.retrieveTheUptimeAndPlayerCounts.name, { query, headers, url, otherOptions }, 'GET')
  }

}
