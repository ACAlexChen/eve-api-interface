/**
 * @type GET
 * @description Get a character's recent kills and losses
 *
 * @link /characters/{character_id}/killmails/recent/
 * @alias /dev/characters/{character_id}/killmails/recent/
 * @alias /legacy/characters/{character_id}/killmails/recent/
 * @alias /v1/characters/{character_id}/killmails/recent/
 *
 * Requires the following scope: esi-killmails.read_killmails.v1
 * Return a list of a character’s kills and losses going back 90 days
 * This route is cached for up to 300 seconds
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 *
 * @param { number } character_id
 * An EVE character ID
 *
 * @param { number } page
 * Which page of results to return
 *
 * @param { string } token
 * Access token to use if unable to set a header
 */
export interface getACharactersRecentKillsAndLosses {
  url: '/characters/{character_id}/killmails/recent/' | '/dev/characters/{character_id}/killmails/recent/' | '/legacy/characters/{character_id}/killmails/recent/' | '/v1/characters/{character_id}/killmails/recent/'

  path: {
    character_id: number
  }

  query: {
    datasource?: 'tranquility'
    page?: number
    token?: string
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'A list of killmail IDs and hashes'
      model: {
        killmail_hash: string
        killmail_id: number
      }[]
      headers: {
        'Cache-Control': string
        Expires: string
        'Last-Modified': string
        ETag: string
        'X-Pages': number
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        Expires: string
        'Last-Modified': string
        ETag: string
      }
    }
    400: {
      description: 'Bad request'
      model: {
        error: string
      }
    }
    401: {
      description: 'Unauthorized'
      model: {
        error: string
      }
    }
    403: {
      description: 'Forbidden'
      model: {
        error: string
        sso_status?: string
      }
    }
    420: {
      description: 'Error limited'
      model: {
        error: string
      }
    }
    500: {
      description: 'Internal server error'
      model: {
        error: string
      }
    }
    503: {
      description: 'Service unavailable'
      model: {
        error: string
      }
    }
    504: {
      description: 'Gateway timeout'
      model: {
        error: string
        timeout?: number
      }
    }
  }
}
export const getACharactersRecentKillsAndLosses = {
  200: 'A list of killmail IDs and hashes',
  304: 'Not modified',
  400: 'Bad request',
  401: 'Unauthorized',
  403: 'Forbidden',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get a corporation's recent kills and losses
 *
 * @link /corporations/{corporation_id}/killmails/recent/
 * @alias /dev/corporations/{corporation_id}/killmails/recent/
 * @alias /legacy/corporations/{corporation_id}/killmails/recent/
 * @alias /v1/corporations/{corporation_id}/killmails/recent/
 *
 * Requires the following scope: esi-killmails.read_corporation_killmails.v1
 * Get a list of a corporation’s kills and losses going back 90 days
 * This route is cached for up to 300 seconds
 * Requires one of the following EVE corporation role(s): Director
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 *
 * @param { number } corporation_id
 * An EVE corporation ID
 *
 * @param { number } page
 * Which page of results to return
 *
 * @param { string } token
 * Access token to use if unable to set a header
 */
export interface getACorporationsRecentKillsAndLosses {
  url: '/corporations/{corporation_id}/killmails/recent/' | '/dev/corporations/{corporation_id}/killmails/recent/' | '/legacy/corporations/{corporation_id}/killmails/recent/' | '/v1/corporations/{corporation_id}/killmails/recent/'

  path: {
    corporation_id: number
  }

  query: {
    datasource?: 'tranquility'
    page?: number
    token?: string
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'A list of killmail IDs and hashes'
      model: {
        killmail_hash: string
        killmail_id: number
      }[]
      headers: {
        'Cache-Control': string
        Expires: string
        'Last-Modified': string
        ETag: string
        'X-Pages': number
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        Expires: string
        'Last-Modified': string
        ETag: string
      }
    }
    400: {
      description: 'Bad request'
      model: {
        error: string
      }
    }
    401: {
      description: 'Unauthorized'
      model: {
        error: string
      }
    }
    403: {
      description: 'Forbidden'
      model: {
        error: string
        sso_status?: string
      }
    }
    420: {
      description: 'Error limited'
      model: {
        error: string
      }
    }
    500: {
      description: 'Internal server error'
      model: {
        error: string
      }
    }
    503: {
      description: 'Service unavailable'
      model: {
        error: string
      }
    }
    504: {
      description: 'Gateway timeout'
      model: {
        error: string
        timeout?: number
      }
    }
  }
}
export const getACorporationsRecentKillsAndLosses = {
  200: 'A list of killmail IDs and hashes',
  304: 'Not modified',
  400: 'Bad request',
  401: 'Unauthorized',
  403: 'Forbidden',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get a single killmail
 *
 * @link /killmails/{killmail_id}/{killmail_hash}/
 * @alias /dev/killmails/{killmail_id}/{killmail_hash}/
 * @alias /legacy/killmails/{killmail_id}/{killmail_hash}/
 * @alias /v1/killmails/{killmail_id}/{killmail_hash}/
 *
 * Return a single killmail from its ID and hash
 * This route is cached for up to 30758400 seconds
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 *
 * @param { number } killmail_id
 * The killmail ID to be queried
 *
 * @param { string } killmail_hash
 * The killmail hash for verification
 */
export interface getASingleKillmail {
  url: '/killmails/{killmail_id}/{killmail_hash}/' | '/dev/killmails/{killmail_id}/{killmail_hash}/' | '/legacy/killmails/{killmail_id}/{killmail_hash}/' | '/v1/killmails/{killmail_id}/{killmail_hash}/'

  path: {
    killmail_id: number
    killmail_hash: string
  }

  query: {
    datasource?: 'tranquility'
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'A killmail'
      model: {
        attackers: {
          alliance_id?: number
          character_id?: number
          corporation_id?: number
          damage_done: number
          faction_id?: number
          final_blow: boolean
          security_status: number
          ship_type_id?: number
          weapon_type_id?: number
        }[]
        killmail_id: number
        killmail_time: string
        moon_id?: number
        solar_system_id: number
        victim: {
          alliance_id?: number
          character_id?: number
          corporation_id?: number
          damage_taken: number
          faction_id?: number
          items?: {
            flag: number
            item_type_id: number
            items?: {
              flag: number
              item_type_id: number
              quantity_destroyed?: number
              quantity_dropped?: number
              singleton: number
            }[]
            quantity_destroyed?: number
            quantity_dropped?: number
            singleton: number
          }[]
          position?: {
            x: number
            y: number
            z: number
          }
          ship_type_id: number
        }
        war_id?: number
      }
      headers: {
        'Cache-Control': string
        Expires: string
        'Last-Modified': string
        ETag: string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        Expires: string
        'Last-Modified': string
        ETag: string
      }
    }
    400: {
      description: 'Bad request'
      model: {
        error: string
      }
    }
    420: {
      description: 'Error limited'
      model: {
        error: string
      }
    }
    422: {
      description: 'Invalid killmail_id and/or killmail_hash'
      model: {
        error?: string
      }
    }
    500: {
      description: 'Internal server error'
      model: {
        error: string
      }
    }
    503: {
      description: 'Service unavailable'
      model: {
        error: string
      }
    }
    504: {
      description: 'Gateway timeout'
      model: {
        error: string
        timeout?: number
      }
    }
  }
}
export const getASingleKillmail = {
  200: 'A killmail',
  304: 'Not modified',
  400: 'Bad request',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

export interface Killmails {
  getACharactersRecentKillsAndLosses: (path: getACharactersRecentKillsAndLosses['path'], query: getACharactersRecentKillsAndLosses['query'], headers: getACharactersRecentKillsAndLosses['headers'], url: getACharactersRecentKillsAndLosses['url']) => Promise<getACharactersRecentKillsAndLosses['responses'][200]['model']>
  getACorporationsRecentKillsAndLosses: (path: getACorporationsRecentKillsAndLosses['path'], query: getACorporationsRecentKillsAndLosses['query'], headers: getACorporationsRecentKillsAndLosses['headers'], url: getACorporationsRecentKillsAndLosses['url']) => Promise<getACorporationsRecentKillsAndLosses['responses'][200]['model']>
  getASingleKillmail: (path: getASingleKillmail['path'], query: getASingleKillmail['query'], headers: getASingleKillmail['headers'], url: getASingleKillmail['url']) => Promise<getASingleKillmail['responses'][200]['model']>
}