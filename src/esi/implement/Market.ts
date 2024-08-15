import { ESIExtendsClass, ESIHttpInput } from "../../f"
import * as type from '../interface/Market'
import { Context, HTTP } from "koishi"
import eveAPI from "../.."

export class Market extends ESIExtendsClass<typeof type> implements type.Market {
  constructor(ctx: Context, cfg: eveAPI.Config) {
    super(ctx, cfg)
    this._log = this.createLogFunction(__filename, Market.name)
    this.type = type
  }

  public async listOrdersInARegion(path: type.listOrdersInARegion['path'], query: type.listOrdersInARegion['query'], headers: type.listOrdersInARegion['headers'] = {}, url: type.listOrdersInARegion['url'] = '/markets/{region_id}/orders/', otherOptions: HTTP.RequestConfig = {}): Promise<type.listOrdersInARegion['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.listOrdersInARegion['responses'][200]['model'], ESIHttpInput<type.listOrdersInARegion['query'], type.listOrdersInARegion['path'], undefined, type.listOrdersInARegion['headers'], type.listOrdersInARegion['url']>, typeof type>(this.listOrdersInARegion.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async getItemGroups(query: type.getItemGroups['query'] = {}, headers: type.getItemGroups['headers'] = {}, url: type.getItemGroups['url'] ='/markets/groups/', otherOptions: HTTP.RequestConfig = {}): Promise<type.getItemGroups['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getItemGroups['responses'][200]['model'], ESIHttpInput<type.getItemGroups['query'], undefined, undefined, type.getItemGroups['headers'], type.getItemGroups['url']>, typeof type>(this.getItemGroups.name, { query, headers, url, otherOptions }, 'GET')
  }

  public async listMarketsPrices(query: type.listMarketsPrices['query'] = {}, headers: type.listMarketsPrices['headers'] = {}, url: type.listMarketsPrices['url'] = '/markets/prices/', otherOptions: HTTP.RequestConfig = {}): Promise<type.listMarketsPrices['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.listMarketsPrices['responses'][200]['model'], ESIHttpInput<type.listMarketsPrices['query'], undefined, undefined, type.listMarketsPrices['headers'], type.listMarketsPrices['url']>, typeof type>(this.listMarketsPrices.name, { query, headers, url, otherOptions }, 'GET')
  }

  public async listOpenOrdersFromACharacter(path: type.listOpenOrdersFromACharacter['path'], query: type.listOpenOrdersFromACharacter['query'] = {}, headers: type.listOpenOrdersFromACharacter['headers'] = {}, url: type.listOpenOrdersFromACharacter['url'] = '/characters/{character_id}/orders/', otherOptions: HTTP.RequestConfig = {}): Promise<type.listOpenOrdersFromACharacter['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.listOpenOrdersFromACharacter['responses'][200]['model'], ESIHttpInput<type.listOpenOrdersFromACharacter['query'], type.listOpenOrdersFromACharacter['path'], undefined, type.listOpenOrdersFromACharacter['headers'], type.listOpenOrdersFromACharacter['url']>, typeof type>(this.listOpenOrdersFromACharacter.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async listHistoricalOrdersByACharacter(path: type.listHistoricalOrdersByACharacter['path'], query: type.listHistoricalOrdersByACharacter['query'] = {}, headers: type.listHistoricalOrdersByACharacter['headers'] = {}, url: type.listHistoricalOrdersByACharacter['url'] = '/characters/{character_id}/orders/history/', otherOptions: HTTP.RequestConfig = {}): Promise<type.listHistoricalOrdersByACharacter['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.listHistoricalOrdersByACharacter['responses'][200]['model'], ESIHttpInput<type.listHistoricalOrdersByACharacter['query'], type.listHistoricalOrdersByACharacter['path'], undefined, type.listHistoricalOrdersByACharacter['headers'], type.listHistoricalOrdersByACharacter['url']>, typeof type>(this.listHistoricalOrdersByACharacter.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async listOpenOrdersFromACorporation(path: type.listOpenOrdersFromACorporation['path'], query: type.listOpenOrdersFromACorporation['query'] = {}, headers: type.listOpenOrdersFromACorporation['headers'] = {}, url: type.listOpenOrdersFromACorporation['url'] = '/corporations/{corporation_id}/orders/', otherOptions: HTTP.RequestConfig = {}): Promise<type.listOpenOrdersFromACorporation['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.listOpenOrdersFromACorporation['responses'][200]['model'], ESIHttpInput<type.listOpenOrdersFromACorporation['query'], type.listOpenOrdersFromACorporation['path'], undefined, type.listOpenOrdersFromACorporation['headers'], type.listOpenOrdersFromACorporation['url']>, typeof type>(this.listOpenOrdersFromACorporation.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async listHistoricalOrdersFromACorporation(path: type.listHistoricalOrdersFromACorporation['path'], query: type.listHistoricalOrdersFromACorporation['query'] = {}, headers: type.listHistoricalOrdersFromACorporation['headers'] = {}, url: type.listHistoricalOrdersFromACorporation['url'] = '/corporations/{corporation_id}/orders/history/', otherOptions: HTTP.RequestConfig = {}): Promise<type.listHistoricalOrdersFromACorporation['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.listHistoricalOrdersFromACorporation['responses'][200]['model'], ESIHttpInput<type.listHistoricalOrdersFromACorporation['query'], type.listHistoricalOrdersFromACorporation['path'], undefined, type.listHistoricalOrdersFromACorporation['headers'], type.listHistoricalOrdersFromACorporation['url']>, typeof type>(this.listHistoricalOrdersFromACorporation.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async listHistoricalMarketStatisticsInARegion(path: type.listHistoricalMarketStatisticsInARegion['path'], query: type.listHistoricalMarketStatisticsInARegion['query'], headers: type.listHistoricalMarketStatisticsInARegion['headers'] = {}, url: type.listHistoricalMarketStatisticsInARegion['url'] = '/markets/{region_id}/history/', otherOptions: HTTP.RequestConfig = {}): Promise<type.listHistoricalMarketStatisticsInARegion['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.listHistoricalMarketStatisticsInARegion['responses'][200]['model'], ESIHttpInput<type.listHistoricalMarketStatisticsInARegion['query'], type.listHistoricalMarketStatisticsInARegion['path'], undefined, type.listHistoricalMarketStatisticsInARegion['headers'], type.listHistoricalMarketStatisticsInARegion['url']>, typeof type>(this.listHistoricalMarketStatisticsInARegion.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async listTypeIDsRelevantToAMarket(path: type.listTypeIDsRelevantToAMarket['path'], query: type.listTypeIDsRelevantToAMarket['query'] = {}, headers: type.listTypeIDsRelevantToAMarket['headers'] = {}, url: type.listTypeIDsRelevantToAMarket['url'] = '/markets/{region_id}/types/', otherOptions: HTTP.RequestConfig = {}): Promise<type.listTypeIDsRelevantToAMarket['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.listTypeIDsRelevantToAMarket['responses'][200]['model'], ESIHttpInput<type.listTypeIDsRelevantToAMarket['query'], type.listTypeIDsRelevantToAMarket['path'], undefined, type.listTypeIDsRelevantToAMarket['headers'], type.listTypeIDsRelevantToAMarket['url']>, typeof type>(this.listTypeIDsRelevantToAMarket.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async getItemGroupInformation(path: type.getItemGroupInformation['path'], query: type.getItemGroupInformation['query'] = {}, headers: type.getItemGroupInformation['headers'] = {}, url: type.getItemGroupInformation['url'] = '/markets/groups/{market_group_id}/', otherOptions: HTTP.RequestConfig = {}): Promise<type.getItemGroupInformation['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getItemGroupInformation['responses'][200]['model'], ESIHttpInput<type.getItemGroupInformation['query'], type.getItemGroupInformation['path'], undefined, type.getItemGroupInformation['headers'], type.getItemGroupInformation['url']>, typeof type>(this.getItemGroupInformation.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async listOrdersInAStructure(path: type.listOrdersInAStructure['path'], query: type.listOrdersInAStructure['query'] = {}, headers: type.listOrdersInAStructure['headers'] = {}, url: type.listOrdersInAStructure['url'] = '/markets/structures/{structure_id}/', otherOptions: HTTP.RequestConfig = {}): Promise<type.listOrdersInAStructure['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.listOrdersInAStructure['responses'][200]['model'], ESIHttpInput<type.listOrdersInAStructure['query'], type.listOrdersInAStructure['path'], undefined, type.listOrdersInAStructure['headers'], type.listOrdersInAStructure['url']>, typeof type>(this.listOrdersInAStructure.name, { path, query, headers, url, otherOptions }, 'GET')
  }
}

