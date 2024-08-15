import { ESIExtendsClass, ESIHttpInput } from "../../f"
import eveAPI from "../.."
import * as type from '../interface/Alliance'
import { Context, HTTP } from "koishi"

export class Alliance extends ESIExtendsClass<typeof type> implements type.Alliance {
  constructor(ctx: Context, cfg: eveAPI.Config) {
    super(ctx, cfg)
    this._log = this.createLogFunction(__filename, Alliance.name)
    this.type = type
  }

  public async listAllAlliances(query: type.listAllAlliances['query'] = {}, headers: type.listAllAlliances['headers'] = {}, url: type.listAllAlliances['url'] = '/alliances/', otherOptions: HTTP.RequestConfig = {}): Promise<type.listAllAlliances['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.listAllAlliances['responses'][200]['model'], ESIHttpInput<type.listAllAlliances['query'], undefined, undefined, type.listAllAlliances['headers'], type.listAllAlliances['url']>, typeof type>(this.listAllAlliances.name, { query, headers, url, otherOptions }, 'GET')
  }

  public async getAllianceInformation(path: type.getAllianceInformation['path'], query: type.getAllianceInformation['query'] = {}, headers: type.getAllianceInformation['headers'] = {}, url: type.getAllianceInformation['url'] = '/alliances/{alliance_id}/', otherOptions: HTTP.RequestConfig = {}): Promise<type.getAllianceInformation['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getAllianceInformation['responses'][200]['model'], ESIHttpInput<type.getAllianceInformation['query'], type.getAllianceInformation['path'], undefined, type.getAllianceInformation['headers'], type.getAllianceInformation['url']>, typeof type>(this.getAllianceInformation.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async listAllianceCorporations(path: type.listAllianceCorporations['path'], query: type.listAllianceCorporations['query'] = {}, headers: type.listAllianceCorporations['headers'] = {}, url: type.listAllianceCorporations['url'] = '/alliances/{alliance_id}/corporations/', otherOptions: HTTP.RequestConfig = {}): Promise<type.listAllianceCorporations['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.listAllianceCorporations['responses'][200]['model'], ESIHttpInput<type.listAllianceCorporations['query'], type.listAllianceCorporations['path'], undefined, type.listAllianceCorporations['headers'], type.listAllianceCorporations['url']>, typeof type>(this.listAllianceCorporations.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async getAllianceIcon(path: type.getAllianceIcon['path'], query: type.getAllianceIcon['query'] = {}, headers: type.getAllianceIcon['headers'] = {}, url: type.getAllianceIcon['url'] = '/alliances/{alliance_id}/icons/', otherOptions: HTTP.RequestConfig = {}): Promise<type.getAllianceIcon['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getAllianceIcon['responses'][200]['model'], ESIHttpInput<type.getAllianceIcon['query'], type.getAllianceIcon['path'], undefined, type.getAllianceIcon['headers'], type.getAllianceIcon['url']>, typeof type>(this.getAllianceIcon.name, { path, query, headers, url, otherOptions }, 'GET')
  }

}
