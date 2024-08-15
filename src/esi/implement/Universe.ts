import { ESIExtendsClass, ESIHttpInput } from "../../f"
import { Context, HTTP } from "koishi"
import eveAPI from '../..'
import * as type from '../interface/Universe'

export class Universe extends ESIExtendsClass<typeof type> implements type.Universe {
  constructor(ctx: Context, cfg: eveAPI.Config) {
    super(ctx, cfg)
    this._log = this.createLogFunction(__filename, Universe.name)
    this.type = type
  }

  public async bulkNamesToIds(body: type.bulkNamesToIds['body'], query: type.bulkNamesToIds['query'] = {}, headers: type.bulkNamesToIds['headers'] = {}, url: type.bulkNamesToIds['url'] = '/universe/ids/', otherOptions: HTTP.RequestConfig = {}): Promise<type.bulkNamesToIds['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.bulkNamesToIds['responses'][200]['model'], ESIHttpInput<type.bulkNamesToIds['query'], undefined, type.bulkNamesToIds['body'], type.bulkNamesToIds['headers'], type.bulkNamesToIds['url']>, typeof type>(this.bulkNamesToIds.name, { body, query, headers, url, otherOptions }, 'GET')
  }

  public async getAncestries(query: type.getAncestries['query'] = {}, headers: type.getAncestries['headers'] = {}, url: type.getAncestries['url'] = '/universe/ancestries/', otherOptions: HTTP.RequestConfig = {}): Promise<type.getAncestries['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getAncestries['responses'][200]['model'], ESIHttpInput<type.getAncestries['query'], undefined, undefined, type.getAncestries['headers'], type.getAncestries['url']>, typeof type>(this.getAncestries.name, { query, headers, url, otherOptions }, 'GET')
  }

  public async getAsteroidBelt(path: type.getAsteroidBelt['path'], query: type.getAsteroidBelt['query'] = {}, headers: type.getAsteroidBelt['headers'] = {}, url: type.getAsteroidBelt['url'] = '/universe/asteroid_blts/{asteroid_belt_id}', otherOptions: HTTP.RequestConfig = {}): Promise<type.getAsteroidBelt['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getAsteroidBelt['responses'][200]['model'], ESIHttpInput<type.getAsteroidBelt['query'], type.getAsteroidBelt['path'], undefined, type.getAsteroidBelt['headers'], type.getAsteroidBelt['url']>, typeof type>(this.getAsteroidBelt.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async getBloodlines(query: type.getBloodlines['query'] = {}, headers: type.getBloodlines['headers'] = {}, url: type.getBloodlines['url'] = '/universe/bloodlines/', otherOptions: HTTP.RequestConfig = {}): Promise<type.getBloodlines['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getBloodlines['responses'][200]['model'], ESIHttpInput<type.getBloodlines['query'], undefined, undefined, type.getBloodlines['headers'], type.getBloodlines['url']>, typeof type>(this.getBloodlines.name, { query, headers, url, otherOptions }, 'GET')
  }

  public async getItemCategories(query: type.getItemCategories['query'] = {}, headers: type.getItemCategories['headers'] = {}, url: type.getItemCategories['url'] = '/universe/categories/', otherOptions: HTTP.RequestConfig = {}): Promise<type.getItemCategories['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getItemCategories['responses'][200]['model'], ESIHttpInput<type.getItemCategories['query'], undefined, undefined, type.getItemCategories['headers'], type.getItemCategories['url']>, typeof type>(this.getItemCategories.name, { query, headers, url, otherOptions }, 'GET')
  }

  public async getItemCategory(path: type.getItemCategory['path'], query: type.getItemCategory['query'] = {}, headers: type.getItemCategory['headers'] = {}, url: type.getItemCategory['url'] = '/universe/categories/{category_id}', otherOptions: HTTP.RequestConfig = {}): Promise<type.getItemCategory['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getItemCategory['responses'][200]['model'], ESIHttpInput<type.getItemCategory['query'], type.getItemCategory['path'], undefined, type.getItemCategory['headers'], type.getItemCategory['url']>, typeof type>(this.getItemCategory.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async getConstellations(query: type.getConstellations['query'] = {}, headers: type.getConstellations['headers'] = {}, url: type.getConstellations['url'] = '/universe/constellations/', otherOptions: HTTP.RequestConfig = {}): Promise<type.getConstellations['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getConstellations['responses'][200]['model'], ESIHttpInput<type.getConstellations['query'], undefined, undefined, type.getConstellations['headers'], type.getConstellations['url']>, typeof type>(this.getConstellations.name, { query, headers, url, otherOptions }, 'GET')
  }

  public async getConstellationInformation(path: type.getConstellationInformation['path'], query: type.getConstellationInformation['query'] = {}, headers: type.getConstellationInformation['headers'] = {}, url: type.getConstellationInformation['url'] = '/universe/constellations/{constellation_id}', otherOptions: HTTP.RequestConfig = {}): Promise<type.getConstellationInformation['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getConstellationInformation['responses'][200]['model'], ESIHttpInput<type.getConstellationInformation['query'], type.getConstellationInformation['path'], undefined, type.getConstellationInformation['headers'], type.getConstellationInformation['url']>, typeof type>(this.getConstellationInformation.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async getFactions(query: type.getFactions['query'] = {}, headers: type.getFactions['headers'] = {}, url: type.getFactions['url'] = '/universe/factions/', otherOptions: HTTP.RequestConfig = {}): Promise<type.getFactions['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getFactions['responses'][200]['model'], ESIHttpInput<type.getFactions['query'], undefined, undefined, type.getFactions['headers'], type.getFactions['url']>, typeof type>(this.getFactions.name, { query, headers, url, otherOptions }, 'GET')
  }

  public async getGraphics(query: type.getGraphics['query'] = {}, headers: type.getGraphics['headers'] = {}, url: type.getGraphics['url'] = '/universe/graphics/', otherOptions: HTTP.RequestConfig = {}): Promise<type.getGraphics['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getGraphics['responses'][200]['model'], ESIHttpInput<type.getGraphics['query'], undefined, undefined, type.getGraphics['headers'], type.getGraphics['url']>, typeof type>(this.getGraphics.name, { query, headers, url, otherOptions }, 'GET')
  }

  public async getGraphicInformation(path: type.getGraphicInformation['path'], query: type.getGraphicInformation['query'] = {}, headers: type.getGraphicInformation['headers'] = {}, url: type.getGraphicInformation['url'] = '/universe/graphics/{graphic_id}', otherOptions: HTTP.RequestConfig = {}): Promise<type.getGraphicInformation['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getGraphicInformation['responses'][200]['model'], ESIHttpInput<type.getGraphicInformation['query'], type.getGraphicInformation['path'], undefined, type.getGraphicInformation['headers'], type.getGraphicInformation['url']>, typeof type>(this.getGraphicInformation.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async getItemGroups(query: type.getItemGroups['query'] = {}, headers: type.getItemGroups['headers'] = {}, url: type.getItemGroups['url'] = '/universe/groups/', otherOptions: HTTP.RequestConfig = {}): Promise<type.getItemGroups['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getItemGroups['responses'][200]['model'], ESIHttpInput<type.getItemGroups['query'], undefined, undefined, type.getItemGroups['headers'], type.getItemGroups['url']>, typeof type>(this.getItemGroups.name, { query, headers, url, otherOptions }, 'GET')
  }

  public async getItemGroupInformation(path: type.getItemGroupInformation['path'], query: type.getItemGroupInformation['query'] = {}, headers: type.getItemGroupInformation['headers'] = {}, url: type.getItemGroupInformation['url'] = '/universe/groups/{group_id}', otherOptions: HTTP.RequestConfig = {}): Promise<type.getItemGroupInformation['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getItemGroupInformation['responses'][200]['model'], ESIHttpInput<type.getItemGroupInformation['query'], type.getItemGroupInformation['path'], undefined, type.getItemGroupInformation['headers'], type.getItemGroupInformation['url']>, typeof type>(this.getItemGroupInformation.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async getMoonInformation(path: type.getMoonInformation['path'], query: type.getMoonInformation['query'] = {}, headers: type.getMoonInformation['headers'] = {}, url: type.getMoonInformation['url'] = '/universe/moons/{moon_id}', otherOptions: HTTP.RequestConfig = {}): Promise<type.getMoonInformation['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getMoonInformation['responses'][200]['model'], ESIHttpInput<type.getMoonInformation['query'], type.getMoonInformation['path'], undefined, type.getMoonInformation['headers'], type.getMoonInformation['url']>, typeof type>(this.getMoonInformation.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async getNamesAndCategoriesForIds(body: type.getNamesAndCategoriesForIds['body'], query: type.getNamesAndCategoriesForIds['query'] = {}, url: type.getNamesAndCategoriesForIds['url'] = '/universe/names/', otherOptions: HTTP.RequestConfig = {}): Promise<type.getNamesAndCategoriesForIds['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getNamesAndCategoriesForIds['responses'][200]['model'], ESIHttpInput<type.getNamesAndCategoriesForIds['query'], undefined, type.getNamesAndCategoriesForIds['body'], undefined, type.getNamesAndCategoriesForIds['url']>, typeof type>(this.getNamesAndCategoriesForIds.name, { body, query, url, otherOptions }, 'GET')
  }

  public async getPlanetInformation(path: type.getPlanetInformation['path'], query: type.getPlanetInformation['query'] = {}, headers: type.getPlanetInformation['headers'] = {}, url: type.getPlanetInformation['url'] = '/universe/planets/{planet_id}', otherOptions: HTTP.RequestConfig = {}): Promise<type.getPlanetInformation['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getPlanetInformation['responses'][200]['model'], ESIHttpInput<type.getPlanetInformation['query'], type.getPlanetInformation['path'], undefined, type.getPlanetInformation['headers'], type.getPlanetInformation['url']>, typeof type>(this.getPlanetInformation.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async getCharacterRaces(query: type.getCharacterRaces['query'] = {}, headers: type.getCharacterRaces['headers'] = {}, url: type.getCharacterRaces['url'] = '/universe/races/', otherOptions: HTTP.RequestConfig = {}): Promise<type.getCharacterRaces['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getCharacterRaces['responses'][200]['model'], ESIHttpInput<type.getCharacterRaces['query'], undefined, undefined, type.getCharacterRaces['headers'], type.getCharacterRaces['url']>, typeof type>(this.getCharacterRaces.name, { query, headers, url, otherOptions }, 'GET')
  }

  public async getRegions(query: type.getRegions['query'] = {}, headers: type.getRegions['headers'] = {}, url: type.getRegions['url'] = '/universe/regions/', otherOptions: HTTP.RequestConfig = {}): Promise<type.getRegions['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getRegions['responses'][200]['model'], ESIHttpInput<type.getRegions['query'], undefined, undefined, type.getRegions['headers'], type.getRegions['url']>, typeof type>(this.getRegions.name, { query, headers, url, otherOptions }, 'GET')
  }

  public async getRegionInformation(path: type.getRegionInformation['path'], query: type.getRegionInformation['query'] = {}, headers: type.getRegionInformation['headers'] = {}, url: type.getRegionInformation['url'] = '/universe/regions/{region_id}', otherOptions: HTTP.RequestConfig = {}): Promise<type.getRegionInformation['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getRegionInformation['responses'][200]['model'], ESIHttpInput<type.getRegionInformation['query'], type.getRegionInformation['path'], undefined, type.getRegionInformation['headers'], type.getRegionInformation['url']>, typeof type>(this.getRegionInformation.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async getStargateInformation(path: type.getStargateInformation['path'], query: type.getStargateInformation['query'] = {}, headers: type.getStargateInformation['headers'] = {}, url: type.getStargateInformation['url'] = '/universe/stargates/{stargate_id}', otherOptions: HTTP.RequestConfig = {}): Promise<type.getStargateInformation['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getStargateInformation['responses'][200]['model'], ESIHttpInput<type.getStargateInformation['query'], type.getStargateInformation['path'], undefined, type.getStargateInformation['headers'], type.getStargateInformation['url']>, typeof type>(this.getStargateInformation.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async getStarInformation(path: type.getStarInformation['path'], query: type.getStarInformation['query'] = {}, headers: type.getStarInformation['headers'] = {}, url: type.getStarInformation['url'] = '/universe/stars/{star_id}', otherOptions: HTTP.RequestConfig = {}): Promise<type.getStarInformation['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getStarInformation['responses'][200]['model'], ESIHttpInput<type.getStarInformation['query'], type.getStarInformation['path'], undefined, type.getStarInformation['headers'], type.getStarInformation['url']>, typeof type>(this.getStarInformation.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async getStationInformation(path: type.getStationInformation['path'], query: type.getStationInformation['query'] = {}, headers: type.getStationInformation['headers'] = {}, url: type.getStationInformation['url'] = '/universe/stations/{station_id}', otherOptions: HTTP.RequestConfig = {}): Promise<type.getStationInformation['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getStationInformation['responses'][200]['model'], ESIHttpInput<type.getStationInformation['query'], type.getStationInformation['path'], undefined, type.getStationInformation['headers'], type.getStationInformation['url']>, typeof type>(this.getStationInformation.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async listAllPublicStructures(query: type.listAllPublicStructures['query'] = {}, headers: type.listAllPublicStructures['headers'] = {}, url: type.listAllPublicStructures['url'] = '/universe/structures/', otherOptions: HTTP.RequestConfig = {}): Promise<type.listAllPublicStructures['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.listAllPublicStructures['responses'][200]['model'], ESIHttpInput<type.listAllPublicStructures['query'], undefined, undefined, type.listAllPublicStructures['headers'], type.listAllPublicStructures['url']>, typeof type>(this.listAllPublicStructures.name, { query, headers, url, otherOptions }, 'GET')
  }

  public async getStructureInformation(path: type.getStructureInformation['path'], query: type.getStructureInformation['query'] = {}, headers: type.getStructureInformation['headers'] = {}, url: type.getStructureInformation['url'] = '/universe/structures/{structure_id}', otherOptions: HTTP.RequestConfig = {}): Promise<type.getStructureInformation['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getStructureInformation['responses'][200]['model'], ESIHttpInput<type.getStructureInformation['query'], type.getStructureInformation['path'], undefined, type.getStructureInformation['headers'], type.getStructureInformation['url']>, typeof type>(this.getStructureInformation.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async getSystemJumps(query: type.getSystemJumps['query'] = {}, headers: type.getSystemJumps['headers'] = {}, url: type.getSystemJumps['url'] = '/universe/system_jumps/', otherOptions: HTTP.RequestConfig = {}): Promise<type.getSystemJumps['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getSystemJumps['responses'][200]['model'], ESIHttpInput<type.getSystemJumps['query'], undefined, undefined, type.getSystemJumps['headers'], type.getSystemJumps['url']>, typeof type>(this.getSystemJumps.name, { query, headers, url, otherOptions }, 'GET')
  }

  public async getSystemKills(query: type.getSystemKills['query'] = {}, headers: type.getSystemKills['headers'] = {}, url: type.getSystemKills['url'] = '/universe/system_kills/', otherOptions: HTTP.RequestConfig = {}): Promise<type.getSystemKills['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getSystemKills['responses'][200]['model'], ESIHttpInput<type.getSystemKills['query'], undefined, undefined, type.getSystemKills['headers'], type.getSystemKills['url']>, typeof type>(this.getSystemKills.name, { query, headers, url, otherOptions }, 'GET')
  }

  public async getSolarSystems(query: type.getSolarSystems['query'] = {}, headers: type.getSolarSystems['headers'] = {}, url: type.getSolarSystems['url'] = '/universe/systems/', otherOptions: HTTP.RequestConfig = {}): Promise<type.getSolarSystems['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getSolarSystems['responses'][200]['model'], ESIHttpInput<type.getSolarSystems['query'], undefined, undefined, type.getSolarSystems['headers'], type.getSolarSystems['url']>, typeof type>(this.getSolarSystems.name, { query, headers, url, otherOptions }, 'GET')
  }

  public async getSolarSystemInformation(path: type.getSolarSystemInformation['path'], query: type.getSolarSystemInformation['query'] = {}, headers: type.getSolarSystemInformation['headers'] = {}, url: type.getSolarSystemInformation['url'] = '/universe/systems/{system_id}', otherOptions: HTTP.RequestConfig = {}): Promise<type.getSolarSystemInformation['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getSolarSystemInformation['responses'][200]['model'], ESIHttpInput<type.getSolarSystemInformation['query'], type.getSolarSystemInformation['path'], undefined, type.getSolarSystemInformation['headers'], type.getSolarSystemInformation['url']>, typeof type>(this.getSolarSystemInformation.name, { path, query, headers, url, otherOptions }, 'GET')
  }

  public async getTypes(query: type.getTypes['query'] = {}, headers: type.getTypes['headers'] = {}, url: type.getTypes['url'] = '/universe/types/', otherOptions: HTTP.RequestConfig = {}): Promise<type.getTypes['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getTypes['responses'][200]['model'], ESIHttpInput<type.getTypes['query'], undefined, undefined, type.getTypes['headers'], type.getTypes['url']>, typeof type>(this.getTypes.name, { query, headers, url, otherOptions }, 'GET')
  }

  public async getTypeInformation(path: type.getTypeInformation['path'], query: type.getTypeInformation['query'] = {}, headers: type.getTypeInformation['headers'] = {}, url: type.getTypeInformation['url'] = '/universe/types/{type_id}', otherOptions: HTTP.RequestConfig = {}): Promise<type.getTypeInformation['responses'][200]['model']> {
    return await this.createESIFunction<typeof type>(this)<type.getTypeInformation['responses'][200]['model'], ESIHttpInput<type.getTypeInformation['query'], type.getTypeInformation['path'], undefined, type.getTypeInformation['headers'], type.getTypeInformation['url']>, typeof type>(this.getTypeInformation.name, { path, query, headers, url, otherOptions }, 'GET')
  }

}

