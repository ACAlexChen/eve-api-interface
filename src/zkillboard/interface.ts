/**
 * @description
 * zKillboard provides a statistics API that allows access to all the stats that zKillboard holds on entities.
 * Including number of kills, ranks, ship classes, monthly counts, etc.
 * If you can see it on zKillboard, you can see it with this API.
 *
 * Usage
 * Formatting for the API works like so:
 *
 * @link https://zkillboard.com/api/stats/entityType/entityID/
 *
 * @example
 * @link https://zkillboard.com/api/stats/corporationID/98330748/
 *
 * Valid entityID's are based on the ID's provided by CCP.
 *
 * Valid entityTypes are:
 *
 * @param characterID
 * @param corporationID
 * @param allianceID
 * @param factionID
 * @param shipTypeID
 * @param groupID
 * @param solarSystemID
 * @param regionID
 */

interface alls {
  id: number
  topAllTime: topAllTime['character'][] | topAllTime['corporation'][] | topAllTime['alliance'][] | topAllTime['faction'][] | topAllTime['ship'][] | topAllTime['system'][]
  shipsLost: number
  pointsLost: number
  iskLost: number
  attackersLost: number
  groups: {
    [groupID: number]: {
      groupID: number
      shipsLost?: number
      pointsLost?: number
      iskLost?: number
      shipsDestroyed: number
      pointsDestroyed: number
      iskDestroyed: number
    }
  }
  months: {
    [yearAndMonth: number]: {
      year: number
      month: number
      shipsLost: number
      pointsLost: number
      iskLost: number
      shipsDestroyed: number
      pointsDestroyed: number
      iskDestroyed: number
    }
  }
  labels: {
    [key: string]: {
      shipsLost: number
      pointsLost: number
      iskLost: number
      shipsDestroyed: number
      pointsDestroyed: number
      iskDestroyed: number
    }
  }
  soloLosses: number
  shipsDestroyed: number
  pointsDestroyed: number
  iskDestroyed: number
  attackersDestroyed: number
  soloKills: number
  sequence: number
  epoch: number
  dangerRatio: number
  gangRatio: number
  allTimeSum: number
  nextTopRecalc: number
  topIskKills: number[]
  activepvp: {
    characters: {
      type: 'Characters'
      count: number
    }
    ships: {
      type: 'Ships'
      count: number
    }
    systems: {
      type: 'Systems'
      count: number
    }
    regions: {
      type: 'Regions'
      count: number
    }
    kills: {
      type: 'Total Kills'
      count: number
    }
  }
  info: info
  topLists: topLists['corporation'][] | topLists['character'][] | topLists['alliance'][] | topLists['ship'][] | topLists['system'][] | topLists['location'][]
  topIskKillIDs: number[]
  activity: activity
}

interface info {
  id: number
  name: string
  factionID: number
  lastApiUpdate: {
    sec: number
    usec: number
  }
  serverVersion: number
}

interface activity {
  [key: number]: {
    [key: number]: number
  } | number[]
  max: number
  days: string[]
}

interface topAllTime {
  character: {
    type: 'character'
    data: {
      kills: number
      characterID: number
    }[]
  }

  corporation: {
    type: 'corporation'
    data: {
      kills: number
      corporationID: number
    }[]
  }

  alliance: {
    type: 'alliance'
    data: {
      kills: number
      allianceID: number
    }[]
  }

  faction: {
    type: 'faction'
    data: {
      kills: number
      factionID: number
    }[]
  }

  ship: {
    type: 'ship'
    data: {
      kills: number
      shipTypeID: number
    }[]
  }

  system: {
    type: 'system'
    data: {
      kills: number
      solarSystemID: number
    }[]
  }
}

interface topLists {
  character: {
    type: 'character'
    title: 'Top Characters'
    values: {
      kills: number
      characterID: number
      characterName: string
      id: number
      typeID: null
      name: string
    }[]
  }

  corporation: {
    type: 'corporation'
    title: 'Top Corporations'
    values: {
      kills: number
      corporationID: number
      corporationName: string
      cticker: string
      id: number
      typeID: null
      name: string
    }[]
  }

  alliance: {
    type: 'alliance'
    title: 'Top Alliances'
    values: {
      kills: number
      allianceID: number
      allianceName: string
      aticker: string
      id: number
      typeID: null
      name: string
    }[]
  }

  ship: {
    type: 'shipType'
    title: 'Top Ships'
    values: {
      kills: number
      shipTypeID: number
      shipName: string
      groupID: number
      groupName: string
      id: number
      typeID: null
      name: string
    }[]
  }

  system: {
    type: 'solarSystem'
    title: 'Top Systems'
    values: {
      kills: number
      solarSystemID: number
      solarSystemName: string
      sunTypeID: number
      solarSystemSecurity: string
      systemColorCode: string
      constellationID: number
      regionID: null
      constellationName: string
      id: number
      typeID: null
      name: string
    }[]
  }

  location: {
    type: 'location'
    title: 'Top Locations'
    values: {
      kills: number
      locationID: number
      itemName: null
      locationName: string
      typeID: null
      id: number
      name: string
    }[]
  }
}

export interface corporationID extends alls {
  type: "corporationID"
  hasSupers: boolean
  supers: supers['supers']
  updatingSupers: boolean
  info: corporationInfo
}

interface supers {
  supers: {
    titans: supers['titans']
    supercarriers: supers['supercarriers']
  }

  titans: {
    title: 'Titans'
    data: supers['data'][]
  }

  supercarriers: {
    title: 'Supercarriers'
    data: supers['data'][]
  }

  data: {
    characterID: number
    kills: number
  }
}



interface corporationInfo extends info {
  ceoID: number
  memberCount: number
  ticker: string
  ceo_id: number
  creator_id: number
  date_founded: string
  home_station_id: number
  member_count: number
  shares: number
  allianceID: number
  alliance_id: number
  tax_rate: number
  url: string
  war_eligible: boolean
  has_wars: boolean
  type: 'corporationID'
}

export interface characterID extends alls {
  type: "characterID"
  info: characterInfo
}

interface characterInfo extends info {
  lastAffUpdate: lastAffUpdate
  type: 'characterID'
  allianceID: number
  alliance_id: number
  corporationID: number
  birthday: string
  bloodline_id: number
  secStatus: number
  security_status: number
  title: string
  character_id: number
  race_id: number
  gender: string
  corporation_id: number
}

interface lastAffUpdate {
  sec: number
  usec: number
}

export interface allianceID extends alls {
  type: "allianceID"
  info: allianceInfo
  hasSupers: boolean
  supers: supers['supers']
  updatingSupers: boolean
}

interface allianceInfo extends info {
  type: 'allianceID'
  corpCount: number
  executorCorpID: number
  memberCount: number
  ticker: string
  creator_corporation_id: number
  creator_id: number
  date_founded: string
  executor_corporation_id: number
  has_wars: boolean
  war_eligible: boolean
}


export interface WebSocketMessage {
  attackers: Attacker[]
  killmail_id: number
  killmail_time: string
  solar_system_id: number
  victim: Victim
  zkb: Zkb
}

interface Zkb {
  locationID: number
  hash: string
  fittedValue: number
  droppedValue: number
  destroyedValue: number
  totalValue: number
  points: number
  npc: boolean
  solo: boolean
  awox: boolean
  labels: string[]
  esi: string
  url: string
}

interface Victim {
  alliance_id: number
  character_id: number
  corporation_id: number
  damage_taken: number
  items: Item[]
  position: Position
  ship_type_id: number
}

interface Position {
  x: number
  y: number
  z: number
}

interface Item {
  flag: number
  item_type_id: number
  quantity_destroyed?: number
  singleton: number
  quantity_dropped?: number
}

interface Attacker {
  character_id?: number
  corporation_id: number
  damage_done: number
  final_blow: boolean
  security_status: number
  ship_type_id: number
  weapon_type_id?: number
  alliance_id?: number
}

export interface ZKillboardAPI {
  statistics: (type: 'characterID' | 'corporationID' | 'allianceID', id: number) => Promise<characterID | corporationID | allianceID>
  webSocket: (callback: (ws: WebSocket) => void) => () => void
  webSocketOnlyMessage: (callback: (message: WebSocketMessage, close: () => void) => void) => void
}
