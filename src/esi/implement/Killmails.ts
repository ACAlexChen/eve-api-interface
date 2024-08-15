import { ESIExtendsClass, ESIHttpInput } from "../../f"
import * as type from '../interface/Killmails'
import { Context, HTTP } from "koishi"
import eveApi from '../..'

export class Killmails extends ESIExtendsClass<typeof type> implements type.Killmails {
  constructor(ctx: Context, cfg: eveApi.Config) {
    super(ctx, cfg)
    this._log = this.createLogFunction(__filename, Killmails.name)
    this.type = type
  }

  public async getACharactersRecentKillsAndLosses(path: type.getACharactersRecentKillsAndLosses['path'], query: type.getACharactersRecentKillsAndLosses['query'] = {}, headers: type.getACharactersRecentKillsAndLosses['headers'] = {}, url: type.getACharactersRecentKillsAndLosses['url'] = '/characters/{character_id}/killmails/recent/', otherOptions: HTTP.RequestConfig = {}): Promise<type.getACharactersRecentKillsAndLosses['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getACharactersRecentKillsAndLosses['responses'][200]['model'], ESIHttpInput<type.getACharactersRecentKillsAndLosses['query'], type.getACharactersRecentKillsAndLosses['path'], undefined, type.getACharactersRecentKillsAndLosses['headers'], type.getACharactersRecentKillsAndLosses['url']>, typeof type>(this.getACharactersRecentKillsAndLosses.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async getACorporationsRecentKillsAndLosses(path: type.getACorporationsRecentKillsAndLosses['path'], query: type.getACorporationsRecentKillsAndLosses['query'] = {}, headers: type.getACorporationsRecentKillsAndLosses['headers'] = {}, url: type.getACorporationsRecentKillsAndLosses['url'] = '/corporations/{corporation_id}/killmails/recent/', otherOptions: HTTP.RequestConfig = {}): Promise<type.getACorporationsRecentKillsAndLosses['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getACorporationsRecentKillsAndLosses['responses'][200]['model'], ESIHttpInput<type.getACorporationsRecentKillsAndLosses['query'], type.getACorporationsRecentKillsAndLosses['path'], undefined, type.getACorporationsRecentKillsAndLosses['headers'], type.getACorporationsRecentKillsAndLosses['url']>, typeof type>(this.getACorporationsRecentKillsAndLosses.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async getASingleKillmail(path: type.getASingleKillmail['path'], query: type.getASingleKillmail['query'] = {}, headers: type.getASingleKillmail['headers'] = {}, url: type.getASingleKillmail['url'] = '/killmails/{killmail_id}/{killmail_hash}/', otherOptions: HTTP.RequestConfig = {}): Promise<type.getASingleKillmail['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getASingleKillmail['responses'][200]['model'], ESIHttpInput<type.getASingleKillmail['query'], type.getASingleKillmail['path'], undefined, type.getASingleKillmail['headers'], type.getASingleKillmail['url']>, typeof type>(this.getASingleKillmail.name, { path, query, headers, url, otherOptions }, 'GET')
  }

}
