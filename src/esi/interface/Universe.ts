/**
 * @type POST
 * @description Bulk names to IDs
 *
 * @link /universe/ids/
 * @alias /dev/universe/ids/
 * @alias /legacy/universe/ids/
 * @alias /v1/universe/ids/
 *
 * Resolve a set of names to IDs in the following categories:
 * agents, alliances, characters, constellations,
 * corporations factions, inventory_types,
 * regions, stations, and systems.
 * Only exact matches will be returned.
 * All names searched for are cached for 12 hours
 *
 * @param { string } Accept-Language
 * Language to use in the response
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } language
 * Language to use in the response, takes precedence over Accept-Language
 *
 * @param { string[] } names
 * The names to resolve
 */
interface idAndName {
  id: number
  name: string
}
type language = 'en' | 'en-us' | 'de' | 'fr' | 'ja' | 'ru' | 'zh' | 'ko' | 'es'
export interface bulkNamesToIds {

  url: '/universe/ids/' | '/dev/universe/ids/' | '/legacy/universe/ids/' | '/v1/universe/ids/';

  query: {
    datasource?: 'tranquility'
    language?: language
  }

  headers: {
    'Accept-Language'?: language
  }

  body: string[]

  responses: {
    200: {
      description: 'List of id/name associations for a set of names divided by category. Any name passed in that did not have a match will be ommitted'
      model: {
        agents?: idAndName[]
        alliances?: idAndName[]
        characters?: idAndName[]
        constellations?: idAndName[]
        corporations?: idAndName[]
        factions?: idAndName[]
        inventory_types?: idAndName[]
        regions?: idAndName[]
        stations?: idAndName[]
        systems?: idAndName[]
      }
      headers: {
        'Content-Language': string
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
export const bulkNamesToIds = {
  200: 'List of id/name associations for a set of names divided by category. Any name passed in that did not have a match will be ommitted',
  400: 'Bad request',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get ancestries
 *
 * @link /universe/ancestries/
 * @alias /legacy/universe/ancestries/
 * @alias /v1/universe/ancestries/
 *
 * Get all character ancestries
 * This route expires daily at 11:05
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 *
 * @param { string } language
 * Language to use in the response, takes precedence over Accept-Language
 *
 * @param { string } Accept-Language
 * Language to use in the response
 */
export interface getAncestries {
  url: '/universe/ancestries/' | '/legacy/universe/ancestries/' | '/v1/universe/ancestries/';

  query: {
    datasource?: 'tranquility'
    language?: language
  }


  headers: {
    'If-None-Match'?: string
    'Accept-Language'?: language
  }

  responses: {
    200: {
      description: 'A list of ancestries'
      model: {
        id: number
        name: string
        bloodline_id: number
        description: string
        icon_id?: number
        short_description?: string
      }[]
      headers: {
        'Content-Language': string
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
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
export const getAncestries = {
  200: 'A list of ancestries',
  304: 'Not modified',
  400: 'Bad request',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get asteroid belt information
 *
 * @link /universe/asteroid_blts/{asteroid_belt_id}
 * @alias /legacy/universe/asteroid_belts/{asteroid_belt_id}
 * @alias /v1/universe/asteroid_belts/{asteroid_belt_id}
 *
 * Get information on an asteroid belt
 * This route expires daily at 11:05
 * 
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 *
 * @param { number } asteroid_belt_id
 * asteroid_belt_id integer
 */
export interface getAsteroidBelt {
  url: '/universe/asteroid_blts/{asteroid_belt_id}' | '/legacy/universe/asteroid_belts/{asteroid_belt_id}' | '/v1/universe/asteroid_belts/{asteroid_belt_id}';

  query: {
    datasource?: 'tranquility'
  }

  headers: {
    'If-None-Match'?: string
  }

  path: {
    asteroid_belt_id: number
  }

  responses: {
    200: {
      description: 'Information about an asteroid belt'
      model: {
        name: string
        position: {
          x: number
          y: number
          z: number
        }
        system_id: number
      }
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    400: {
      description: 'Bad request'
      model: {
        error: string
      }
    }
    404: {
      description: 'Asteroid belt not found'
      model: {
        error?: string
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
export const getAsteroidBelt = {
  200: 'Information about an asteroid belt',
  304: 'Not modified',
  400: 'Bad request',
  404: 'Asteroid belt not found',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get bloodlines
 *
 * @link /universe/bloodlines/
 * @alias /legacy/universe/bloodlines/
 * @alias /v1/universe/bloodlines/
 *
 * Get a list of bloodlines
 * This route expires daily at 11:05
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 *
 * @param { string } language
 * Language to use in the response, takes precedence over Accept-Language
 *
 * @param { string } Accept-Language
 * Language to use in the response
 */
export interface getBloodlines {
  url: '/universe/bloodlines/' | '/legacy/universe/bloodlines/' | '/v1/universe/bloodlines/';

  query: {
    datasource?: 'tranquility'
    language?: language
  }

  headers: {
    'If-None-Match'?: string
    'Accept-Language'?: language
  }

  responses: {
    200: {
      description: 'A list of bloodlines'
      model: {
        bloodline_id: number
        charisma: number
        corporation_id: number
        description: string
        intelligence: number
        memory: number
        name: string
        perception: number
        race_id: number
        ship_type_id: number
        willpower: number
      }[]
      headers: {
        'Cache-Control': string
        'Content-Language': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
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
export const getBloodlines = {
  200: 'A list of bloodlines',
  304: 'Not modified',
  400: 'Bad request',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get item categories
 *
 * @link /universe/categories/
 * @alias /legacy/universe/categories/
 * @alias /v1/universe/categories/
 *
 * Get a list of item categories
 * This route expires daily at 11:05
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 */
export interface getItemCategories {
  url: '/universe/categories/' | '/legacy/universe/categories/' | '/v1/universe/categories/';

  query: {
    datasource?: 'tranquility'
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'A list of item category ids'
      model: number[]
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
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
export const getItemCategories = {
  200: 'A list of item category ids',
  304: 'Not modified',
  400: 'Bad request',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get item category information
 *
 * @link /universe/categories/{category_id}
 * @alias /legacy/universe/categories/{category_id}
 * @alias /v1/universe/categories/{category_id}
 *
 * Get information on a item category
 * This route expires daily at 11:05
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 *
 * @param { number } category_id
 * An Eve item category ID
 *
 * @param { string } language
 * Language to use in the response, takes precedence over Accept-Language
 *
 * @param { string } Accept-Language
 * Language to use in the response
 */
export interface getItemCategory {
  url: '/universe/categories/{category_id}' | '/legacy/universe/categories/{category_id}' | '/v1/universe/categories/{category_id}';

  query: {
    datasource?: 'tranquility'
    language?: language
  }

  headers: {
    'If-None-Match'?: string
    'Accept-Language'?: language
  }

  path: {
    category_id: number
  }

  responses: {
    200: {
      description: 'Information about an item category'
      model: {
        category_id: number
        name: string
        published: boolean
        groups: number[]
      }
      headers: {
        'Cache-Control': string
        'Content-Language': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    400: {
      description: 'Bad request'
      model: {
        error: string
      }
    }
    404: {
      description: 'Category not found'
      model: {
        error?: string
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
export const getItemCategory = {
  200: 'Information about an item category',
  304: 'Not modified',
  400: 'Bad request',
  404: 'Category not found',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get constellations
 *
 * @link /universe/constellations/
 * @alias /legacy/universe/constellations/
 * @alias /v1/universe/constellations/
 *
 * Get a list of constellations
 * This route expires daily at 11:05
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 */
export interface getConstellations {
  url: '/universe/constellations/' | '/legacy/universe/constellations/' | '/v1/universe/constellations/';

  query: {
    datasource?: 'tranquility'
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'A list of constellation ids'
      model: number[]
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
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
export const getConstellations = {
  200: 'A list of constellation ids',
  304: 'Not modified',
  400: 'Bad request',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get constellation information
 *
 * @link /universe/constellations/{constellation_id}
 * @alias /legacy/universe/constellations/{constellation_id}
 * @alias /v1/universe/constellations/{constellation_id}
 *
 * Get information on a constellation
 * This route expires daily at 11:05
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 *
 * @param { number } constellation_id
 * constellation_id integer
 *
 * @param { string } language
 * Language to use in the response, takes precedence over Accept-Language
 *
 * @param { string } Accept-Language
 * Language to use in the response
 */
export interface getConstellationInformation {
  url: '/universe/constellations/{constellation_id}' | '/legacy/universe/constellations/{constellation_id}' | '/v1/universe/constellations/{constellation_id}'

  path: {
    constellation_id: number
  }

  query: {
    datasource?: 'tranquility'
    language?: language
  }

  headers: {
    'Accept-Language'?: string
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'Information about a constellation'
      model: {
        constellation_id: number
        name: string
        position: {
          x: number
          y: number
          z: number
        }
        region_id: number
        systems: number[]
      }
      headers: {
        'Cache-Control': string
        'Content-Language': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
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
export const getConstellationInformation = {
  200: 'Information about a constellation',
  304: 'Not modified',
  400: 'Bad request',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get factions
 *
 * @link /universe/factions/
 * @alias /dev/universe/factions/
 * @alias /v2/universe/factions/
 *
 * Get a list of factions
 * This route expires daily at 11:05
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 *
 * @param { string } language
 * Language to use in the response, takes precedence over Accept-Language
 *
 * @param { string } Accept-Language
 * Language to use in the response
 */
export interface getFactions {
  url: '/universe/factions/' | '/dev/universe/factions/' | '/v2/universe/factions/';

  query: {
    datasource?: 'tranquility'
    language?: language
  }

  headers: {
    'If-None-Match'?: string
    'Accept-Language'?: language
  }

  responses: {
    200: {
      description: 'A list of factions'
      model: {
        corporation_id?: number
        description: string
        faction_id: number
        is_unique: boolean
        militia_corporation_id: number
        name: string
        size_factor: number
        solar_system_id?: number
        station_count: number
        station_system_count: number

      }[]
      headers: {
        'Cache-Control': string
        'Content-Language': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
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
export const getFactions = {
  200: 'A list of factions',
  304: 'Not modified',
  400: 'Bad request',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get graphics
 *
 * @link /universe/graphics/
 * @alias /legacy/universe/graphics/
 * @alias /v1/universe/graphics/
 *
 * Get a list of graphics
 * This route expires daily at 11:05
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 */
export interface getGraphics {
  url: '/universe/graphics/' | '/legacy/universe/graphics/' | '/v1/universe/graphics/';

  query: {
    datasource?: 'tranquility'
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'A list of graphic ids'
      model: number[]
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
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
export const getGraphics = {
  200: 'A list of graphic ids',
  304: 'Not modified',
  400: 'Bad request',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get graphic information
 *
 * @link /universe/graphics/{graphic_id}
 * @alias /dev/universe/graphics/{graphic_id}
 * @alias /legacy/universe/graphics/{graphic_id}
 * @alias /v1/universe/graphics/{graphic_id}
 *
 * Get information on a graphic
 * This route expires daily at 11:05
 *
 * @param { number } graphic_id
 * graphic_id integer
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 */
export interface getGraphicInformation {
  url: '/universe/graphics/{graphic_id}' | '/dev/universe/graphics/{graphic_id}' | '/legacy/universe/graphics/{graphic_id}' | '/v1/universe/graphics/{graphic_id}';

  path: {
    graphic_id: number
  }

  query: {
    datasource?: 'tranquility'
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'Information about a graphic'
      model: {
        collision_file?: string
        graphic_file?: string
        graphic_id: number
        icon_folder?: string
        sof_dna?: string
        sof_fation_name?: string
        sof_hull_name?: string
        sof_race_name?: string
      }
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    400: {
      description: 'Bad request'
      model: {
        error: string
      }
    }
    404: {
      description: 'Graphic not found'
      model: {
        error?: string
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
export const getGraphicInformation = {
  200: 'Information about a graphic',
  304: 'Not modified',
  400: 'Bad request',
  404: 'Graphic not found',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get item groups
 *
 * @link /universe/groups/
 * @alias /legacy/universe/groups/
 * @alias /v1/universe/groups/
 *
 * Get a list of item groups
 * This route expires daily at 11:05
 *
 * @param { number } page
 * Which page of results to return
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 */
export interface getItemGroups {
  url: '/universe/groups/' | '/legacy/universe/groups/' | '/v1/universe/groups/';

  query: {
    page?: number
    datasource?: 'tranquility'
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'A list of item group ids'
      model: number[]
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
        'X-Pages': number
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
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
export const getItemGroups = {
  200: 'A list of item group ids',
  304: 'Not modified',
  400: 'Bad request',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get item group information
 *
 * @link /universe/groups/{group_id}
 * @alias /dev/universe/groups/{group_id}
 * @alias /legacy/universe/groups/{group_id}
 * @alias /v1/universe/groups/{group_id}
 *
 * Get information on an item group
 * This route expires daily at 11:05
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 *
 * @param { number } group_id
 * An Eve item group ID
 *
 * @param { string } language
 * Language to use in the response, takes precedence over Accept-Language
 *
 * @param { string } Accept-Language
 * Language to use in the response
 */
export interface getItemGroupInformation {
  url: '/universe/groups/{group_id}' | '/dev/universe/groups/{group_id}' | '/legacy/universe/groups/{group_id}' | '/v1/universe/groups/{group_id}';

  path: {
    group_id: number
  }

  query: {
    datasource?: 'tranquility'
    language?: language
  }

  headers: {
    'If-None-Match'?: string
    'Accept-Language'?: language
  }

  responses: {
    200: {
      description: 'Information about an item group'
      model: {
        category_id: number
        group_id: number
        name: string
        published: boolean
        types: number[]
      }
      headers: {
        'Cache-Control': string
        'Content-Language': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    400: {
      description: 'Bad request'
      model: {
        error: string
      }
    }
    404: {
      description: 'Group not found'
      model: {
        error?: string
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
export const getItemGroupInformation = {
  200: 'Information about an item group',
  304: 'Not modified',
  400: 'Bad request',
  404: 'Group not found',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}



/**
 * @type GET
 * @description Get moon information
 *
 * @link /universe/moons/{moon_id}
 * @alias /legacy/universe/moons/{moon_id}
 * @alias /v1/universe/moons/{moon_id}
 *
 * Get information on a moon
 * This route expires daily at 11:05
 *
 * @param { number } moon_id
 * moon_id integer
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 */
export interface getMoonInformation {
  url: '/universe/moons/{moon_id}' | '/legacy/universe/moons/{moon_id}' | '/v1/universe/moons/{moon_id}';

  path: {
    moon_id: number
  }

  query: {
    datasource?: 'tranquility'
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'Information about a moon'
      model: {
        moon_id: number
        name: string
        position: {
          x: number
          y: number
          z: number
        }
        system_id: number
      }
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    400: {
      description: 'Bad request'
      model: {
        error: string
      }
    }
    404: {
      description: 'Moon not found'
      model: {
        error?: string
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
export const getMoonInformation = {
  200: 'Information about a moon',
  304: 'Not modified',
  400: 'Bad request',
  404: 'Moon not found',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}



/**
 * @type POST
 * @description Get names and categories for a set of IDs
 *
 * @link /universe/names/
 * @alias /dev/universe/names/
 * @alias /v3/universe/names/
 *
 * Resolve a set of IDs to names and categories.
 * Supported ID’s for resolving are:
 * Characters, Corporations, Alliances,
 * Stations, Solar Systems, Constellations,
 * Regions, Types, Factions
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { number[] } ids
 * The ids to resolve
 */
export interface getNamesAndCategoriesForIds {
  url: '/universe/names/' | '/dev/universe/names/' | '/v3/universe/names/';

  query: {
    datasource?: 'tranquility'
  }

  body: number[]

  responses: {
    200: {
      description: 'List of id/name associations for a set of IDs. All IDs must resolve to a name, or nothing will be returned'
      model: {
        category: string
        id: number
        name: string
      }[]
    }
    400: {
      description: 'Bad request'
      model: {
        error: string
      }
    }
    404: {
      description: 'Ensure all IDs are valid before resolving'
      model: {
        error?: string
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
export const getNamesAndCategoriesForIds = {
  200: 'List of id/name associations for a set of IDs. All IDs must resolve to a name, or nothing will be returned',
  400: 'Bad request',
  404: 'Ensure all IDs are valid before resolving',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get planet information
 *
 * @link /universe/planets/{planet_id}
 * @alias /legacy/universe/planets/{planet_id}
 * @alias /v1/universe/planets/{planet_id}
 *
 * Get information on a planet
 * This route expires daily at 11:05
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 *
 * @param { number } planet_id
 * planet_id integer
 */
export interface getPlanetInformation {
  url: '/universe/planets/{planet_id}' | '/legacy/universe/planets/{planet_id}' | '/v1/universe/planets/{planet_id}';

  path: {
    planet_id: number
  }

  query: {
    datasource?: 'tranquility'
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'Information about a planet'
      model: {
        planet_id: number
        name: string
        position: {
          x: number
          y: number
          z: number
        }
        system_id: number
        type_id: number
      }
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    400: {
      description: 'Bad request'
      model: {
        error: string
      }
    }
    404: {
      description: 'Planet not found'
      model: {
        error?: string
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
export const getPlanetInformation = {
  200: 'Information about a planet',
  304: 'Not modified',
  400: 'Bad request',
  404: 'Planet not found',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get character races
 *
 * @link /universe/races/
 * @alias /dev/universe/races/
 * @alias /legacy/universe/races/
 * @alias /v1/universe/races/
 *
 * Get a list of character races
 * This route expires daily at 11:05
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 *
 * @param { string } language
 * Language to use in the response, takes precedence over Accept-Language
 *
 * @param { string } Accept-Language
 * Language to use in the response
 */
export interface getCharacterRaces {
  url: '/universe/races/' | '/dev/universe/races/' | '/legacy/universe/races/' | '/v1/universe/races/';

  query: {
    datasource?: 'tranquility'
    language?: language
  }

  headers: {
    'If-None-Match'?: string
    'Accept-Language'?: language
  }

  responses: {
    200: {
      description: 'A list of character races'
      model: {
        alliance_id: number
        description: string
        name: string
        race_id: number
      }[]
      headers: {
        'Cache-Control': string
        'Content-Language': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
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
export const getCharacterRaces = {
  200: 'A list of character races',
  304: 'Not modified',
  400: 'Bad request',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}



/**
 * @type GET
 * @description Get regions
 *
 * @link /universe/regions/
 * @alias /legacy/universe/regions/
 * @alias /v1/universe/regions/
 *
 * Get a list of regions
 * This route expires daily at 11:05
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 */
export interface getRegions {
  url: '/universe/regions/' | '/legacy/universe/regions/' | '/v1/universe/regions/';

  query: {
    datasource?: 'tranquility'
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'A list of regions'
      model: number[]
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
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
export const getRegions = {
  200: 'A list of regions',
  304: 'Not modified',
  400: 'Bad request',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}



/**
 * @type GET
 * @description Get region information
 *
 * @link /universe/regions/{region_id}
 * @alias /legacy/universe/regions/{region_id}
 * @alias /v1/universe/regions/{region_id}
 *
 * Get information on a region
 * This route expires daily at 11:05
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 *
 * @param { number } region_id
 * region_id integer
 *
 * @param { string } language
 * Language to use in the response, takes precedence over Accept-Language
 *
 * @param { string } Accept-Language
 * Language to use in the response
 */
export interface getRegionInformation {
  url: '/universe/regions/{region_id}' | '/legacy/universe/regions/{region_id}' | '/v1/universe/regions/{region_id}';

  path: {
    region_id: number
  }

  query: {
    datasource?: 'tranquility'
    language?: language
  }

  headers: {
    'If-None-Match'?: string
    'Accept-Language'?: language
  }

  responses: {
    200: {
      description: 'Information about a region'
      model: {
        region_id: number
        description?: string
        name: string
        constellations: number[]
      }
      headers: {
        'Cache-Control': string
        'Content-Language': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    400: {
      description: 'Bad request'
      model: {
        error: string
      }
    }
    404: {
      description: 'Region not found'
      model: {
        error?: string
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
export const getRegionInformation = {
  200: 'Information about a region',
  304: 'Not modified',
  400: 'Bad request',
  404: 'Region not found',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}



/**
 * @type GET
 * @description Get stargate information
 *
 * @link /universe/stargates/{stargate_id}
 * @alias /legacy/universe/stargates/{stargate_id}
 * @alias /v1/universe/stargates/{stargate_id}
 *
 * Get information on a stargate
 * This route expires daily at 11:05
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 *
 * @param { number } stargate_id
 * stargate_id integer
 */
export interface getStargateInformation {
  url: '/universe/stargates/{stargate_id}' | '/legacy/universe/stargates/{stargate_id}' | '/v1/universe/stargates/{stargate_id}';

  path: {
    stargate_id: number
  }

  query: {
    datasource?: 'tranquility'
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'Information about a stargate'
      model: {
        destination: {
          stargate_id: number
          system_id: number
        }
        name: string
        position: {
          x: number
          y: number
          z: number
        }
        system_id: number
        stargate_id: number
        type_id: number
      }
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    400: {
      description: 'Bad request'
      model: {
        error: string
      }
    }
    404: {
      description: 'Stargate not found'
      model: {
        error?: string
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
export const getStargateInformation = {
  200: 'Information about a stargate',
  304: 'Not modified',
  400: 'Bad request',
  404: 'Stargate not found',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}



/**
 * @type GET
 * @description Get star information
 *
 * @link /universe/stars/{star_id}
 * @alias /legacy/universe/stars/{star_id}
 * @alias /v1/universe/stars/{star_id}
 *
 * Get information on a star
 * This route expires daily at 11:05
 *
 * @param { number } star_id
 * star_id integer
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 */
export interface getStarInformation {
  url: '/universe/stars/{star_id}' | '/legacy/universe/stars/{star_id}' | '/v1/universe/stars/{star_id}';

  path: {
    star_id: number
  }

  query: {
    datasource?: 'tranquility'
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'Information about a star'
      model: {
        age: number
        luminosity: number
        name: string
        radius: number
        solar_system_id: number
        spectral_class: string
        temperature: number
        type_id: number

      }
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
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
export const getStarInformation = {
  200: 'Information about a star',
  304: 'Not modified',
  400: 'Bad request',
  404: 'Star not found',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get station information
 *
 * @link /universe/stations/{station_id}
 * @alias /dev/universe/stations/{station_id}
 * @alias /v2/universe/stations/{station_id}
 *
 * Get information on a station
 * This route expires daily at 11:05
 *
 * @param { number } station_id
 * station_id integer
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 */
export interface getStationInformation {
  url: '/universe/stations/{station_id}' | '/dev/universe/stations/{station_id}' | '/v2/universe/stations/{station_id}';

  path: {
    station_id: number
  }

  query: {
    datasource?: 'tranquility'
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'Information about a station'
      model: {
        max_dockable_ship_volume: number
        name: string
        office_rental_cost: number
        owner?: number
        position: {
          x: number
          y: number
          z: number
        }
        race_id?: number
        reprocessing_efficiency: number
        reprocessing_stations_take: number
        services: string[]
        station_id: number
        system_id: number
        type_id: number
      }
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    400: {
      description: 'Bad request'
      model: {
        error: string
      }
    }
    404: {
      description: 'Station not found'
      model: {
        error?: string
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
export const getStationInformation = {
  200: 'Information about a station',
  304: 'Not modified',
  400: 'Bad request',
  404: 'Station not found',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}



/**
 * @type GET
 * @description List all public structures
 *
 * @link /universe/structures/
 * @alias /dev/universe/structures/
 * @alias /legacy/universe/structures/
 * @alias /v1/universe/structures/
 *
 * List all public structures
 * This route is cached for up to 3600 seconds
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 *
 * @param { string } filter
 * Only list public structures that have this service online
 */
export interface listAllPublicStructures {
  url: '/universe/structures/' | '/dev/universe/structures/' | '/legacy/universe/structures/' | '/v1/universe/structures/';

  query: {
    datasource?: 'tranquility'
    filter?: 'market' | 'manufacturing_basic'
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'List of public structure IDs'
      model: number[]
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
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
export const listAllPublicStructures = {
  200: 'List of public structure IDs',
  304: 'Not modified',
  400: 'Bad request',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get structure information
 *
 * @link /universe/structures/{structure_id}
 * @alias /v2/universe/structures/{structure_id}
 *
 * Requires the following scope: esi-universe.read_structures.v1
 * Returns information on requested structure if you are on the ACL. Otherwise, returns “Forbidden” for all inputs.
 * This route is cached for up to 3600 seconds
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 *
 * @param { number } structure_id
 * An Eve structure ID
 *
 * @param { string } token
 * Access token to use if unable to set a header
 */
export interface getStructureInformation {
  url: '/universe/structures/{structure_id}' | '/v2/universe/structures/{structure_id}';

  path: {
    structure_id: number
  }

  query: {
    datasource?: 'tranquility'
    token?: string
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'Data about a structure'
      model: {
        name: string
        owner_id: number
        type_id?: number
        solar_system_id: number
        position: {
          x: number
          y: number
          z: number
        }
      }
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
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
      }
    }
    404: {
      description: 'Structure not found'
      model: {
        error?: string
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
export const getStructureInformation = {
  200: 'Data about a structure',
  304: 'Not modified',
  400: 'Bad request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Structure not found',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get system jumps
 *
 * @link /universe/system_jumps/
 * @alias /legacy/universe/system_jumps/
 * @alias /v1/universe/system_jumps/
 *
 * Get the number of jumps in solar systems within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space.
 * Only systems with jumps will be listed
 * This route is cached for up to 3600 seconds
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 */
export interface getSystemJumps {
  url: '/universe/system_jumps/' | '/legacy/universe/system_jumps/' | '/v1/universe/system_jumps/';

  query: {
    datasource?: 'tranquility'
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'A list of systems and number of jumps'
      model: {
        system_id: number
        ship_jumps: number
      }[]
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
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
export const getSystemJumps = {
  200: 'A list of systems and number of jumps',
  304: 'Not modified',
  400: 'Bad request',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get system kills
 *
 * @link /universe/system_kills/
 * @alias /v2/universe/system_kills/
 *
 * Get the number of ship, pod and NPC kills per solar system within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space.
 * Only systems with kills will be listed
 * This route is cached for up to 3600 seconds
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 */
export interface getSystemKills {
  url: '/universe/system_kills/' | '/v2/universe/system_kills/';

  query: {
    datasource?: 'tranquility'
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'A list of system kills'
      model: {
        system_id: number
        ship_kills: number
        pod_kills: number
        npc_kills: number
      }[]
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
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
export const getSystemKills = {
  200: 'A list of system kills',
  304: 'Not modified',
  400: 'Bad request',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get solar systems
 *
 * @link /universe/systems/
 * @alias /dev/universe/systems/
 * @alias /legacy/universe/systems/
 * @alias /v1/universe/systems/
 *
 * Get a list of solar systems
 * This route expires daily at 11:05
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 */
export interface getSolarSystems {
  url: '/universe/systems/' | '/dev/universe/systems/' | '/legacy/universe/systems/' | '/v1/universe/systems/';

  query: {
    datasource?: 'tranquility'
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'A list of solar systems'
      model: number[]
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
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
export const getSolarSystems = {
  200: 'A list of solar systems',
  304: 'Not modified',
  400: 'Bad request',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get solar system information
 *
 * @link /universe/systems/{system_id}
 * @alias /dev/universe/systems/{system_id}
 * @alias /v4/universe/systems/{system_id}
 *
 * Get information on a solar system
 * This route expires daily at 11:05
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 *
 * @param { number } system_id
 * system_id integer
 *
 * @param { string } language
 * Language to use in the response, takes precedence over Accept-Language
 *
 * @param { string } Accept-Language
 * Language to use in the response
 */
export interface getSolarSystemInformation {
  url: '/universe/systems/{system_id}' | '/dev/universe/systems/{system_id}' | '/v4/universe/systems/{system_id}';

  path: {
    system_id: number
  }

  query: {
    datasource?: 'tranquility'
    language?: string
  }

  headers: {
    'If-None-Match'?: string
    'Accept-Language'?: string
  }

  responses: {
    200: {
      description: 'Information about a solar system'
      model: {
        constellation_id: number
        name: string
        planets?: {
          asteroid_belts?: number[]
          moons?: number[]
          planet_id: number
        }[]
        position: {
          x: number
          y: number
          z: number
        }
        security_class?: string
        security_status: number
        star_id?: number
        stargates?: number[]
        stations?: number[]
        system_id: number
      }
      headers: {
        'Cache-Control': string
        'Content-Language': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    400: {
      description: 'Bad request'
      model: {
        error: string
      }
    }
    404: {
      description: 'Solar system not found'
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
export const getSolarSystemInformation = {
  200: 'Information about a solar system',
  304: 'Not modified',
  400: 'Bad request',
  404: 'Solar system not found',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get types
 *
 * @link /universe/types/
 * @alias /legacy/universe/types/
 * @alias /v1/universe/types/
 *
 * Get a list of type ids
 * This route expires daily at 11:05
 *
 * @param { number } page
 * Which page of results to return
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 */
export interface getTypes {
  url: '/universe/types/' | '/legacy/universe/types/' | '/v1/universe/types/';

  query: {
    page?: number
    datasource?: 'tranquility'
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'A list of type ids'
      model: number[]
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
        'X-Pages': number
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
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
export const getTypes = {
  200: 'A list of type ids',
  304: 'Not modified',
  400: 'Bad request',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get type information
 *
 * @link /universe/types/{type_id}
 * @alias /dev/universe/types/{type_id}
 * @alias /v3/universe/types/{type_id}
 *
 * Get information on a type
 * This route expires daily at 11:05
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 *
 * @param { number } type_id
 * An Eve item type ID
 *
 * @param { string } language
 * Language to use in the response, takes precedence over Accept-Language
 *
 * @param { string } Accept-Language
 * Language to use in the response
 */
export interface getTypeInformation {
  url: '/universe/types/{type_id}' | '/dev/universe/types/{type_id}' | '/v3/universe/types/{type_id}';

  path: {
    type_id: number
  }

  query: {
    datasource?: 'tranquility'
    language?: string
  }

  headers: {
    'If-None-Match'?: string
    'Accept-Language'?: string
  }

  responses: {
    200: {
      description: 'Information about a type'
      model: {
        capacity?: number
        description: string
        dogma_attributes?: {
          attribute_id: number
          value: number
        }[]
        dogma_effects?: {
          effect_id: number
          is_default: boolean
        }[]
        graphic_id?: number
        group_id: number
        icon_id?: number
        market_group_id?: number
        mass?: number
        name: string
        packaged_volume?: number
        portion_size?: number
        published: boolean
        radius?: number
        type_id: number
        volume?: number
      }
      headers: {
        'Cache-Control': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    304: {
      description: 'Not modified'
      headers: {
        'Cache-Control': string
        'Content-Language': string
        ETag: string
        Expires: string
        'Last-Modified': string
      }
    }
    400: {
      description: 'Bad request'
      model: {
        error: string
      }
    }
    404: {
      description: 'Type not found'
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
export const getTypeInformation = {
  200: 'Information about a type',
  304: 'Not modified',
  400: 'Bad request',
  404: 'Type not found',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

export interface Universe {
  bulkNamesToIds: (body: bulkNamesToIds['body'], query: bulkNamesToIds['query'], headers: bulkNamesToIds['headers'], url: bulkNamesToIds['url']) => Promise<bulkNamesToIds['responses'][200]['model']>
  getAncestries: (query: getAncestries['query'], headers: getAncestries['headers'], url: getAncestries['url']) => Promise<getAncestries['responses'][200]['model']>
  getAsteroidBelt: (path: getAsteroidBelt['path'], query: getAsteroidBelt['query'], headers: getAsteroidBelt['headers'], url: getAsteroidBelt['url']) => Promise<getAsteroidBelt['responses'][200]['model']>
  getBloodlines: (query: getBloodlines['query'], headers: getBloodlines['headers'], url: getBloodlines['url']) => Promise<getBloodlines['responses'][200]['model']>
  getItemCategories: (query: getItemCategories['query'], headers: getItemCategories['headers'], url: getItemCategories['url']) => Promise<getItemCategories['responses'][200]['model']>
  getItemCategory: (path: getItemCategory['path'], query: getItemCategory['query'], headers: getItemCategory['headers'], url: getItemCategory['url']) => Promise<getItemCategory['responses'][200]['model']>
  getConstellations: (query: getConstellations['query'], headers: getConstellations['headers'], url: getConstellations['url']) => Promise<getConstellations['responses'][200]['model']>
  getConstellationInformation: (path: getConstellationInformation['path'], query: getConstellationInformation['query'], headers: getConstellationInformation['headers'], url: getConstellationInformation['url']) => Promise<getConstellationInformation['responses'][200]['model']>
  getFactions: (query: getFactions['query'], headers: getFactions['headers'], url: getFactions['url']) => Promise<getFactions['responses'][200]['model']>
  getGraphics: (query: getGraphics['query'], headers: getGraphics['headers'], url: getGraphics['url']) => Promise<getGraphics['responses'][200]['model']>
  getGraphicInformation: (path: getGraphicInformation['path'], query: getGraphicInformation['query'], headers: getGraphicInformation['headers'], url: getGraphicInformation['url']) => Promise<getGraphicInformation['responses'][200]['model']>
  getItemGroups: (query: getItemGroups['query'], headers: getItemGroups['headers'], url: getItemGroups['url']) => Promise<getItemGroups['responses'][200]['model']>
  getItemGroupInformation: (path: getItemGroupInformation['path'], query: getItemGroupInformation['query'], headers: getItemGroupInformation['headers'], url: getItemGroupInformation['url']) => Promise<getItemGroupInformation['responses'][200]['model']>
  getMoonInformation: (path: getMoonInformation['path'], query: getMoonInformation['query'], headers: getMoonInformation['headers'], url: getMoonInformation['url']) => Promise<getMoonInformation['responses'][200]['model']>
  getNamesAndCategoriesForIds: (body: getNamesAndCategoriesForIds['body'], query: getNamesAndCategoriesForIds['query'], url: getNamesAndCategoriesForIds['url']) => Promise<getNamesAndCategoriesForIds['responses'][200]['model']>
  getPlanetInformation: (path: getPlanetInformation['path'], query: getPlanetInformation['query'], headers: getPlanetInformation['headers'], url: getPlanetInformation['url']) => Promise<getPlanetInformation['responses'][200]['model']>
  getCharacterRaces: (query: getCharacterRaces['query'], headers: getCharacterRaces['headers'], url: getCharacterRaces['url']) => Promise<getCharacterRaces['responses'][200]['model']>
  getRegions: (query: getRegions['query'], headers: getRegions['headers'], url: getRegions['url']) => Promise<getRegions['responses'][200]['model']>
  getRegionInformation: (path: getRegionInformation['path'], query: getRegionInformation['query'], headers: getRegionInformation['headers'], url: getRegionInformation['url']) => Promise<getRegionInformation['responses'][200]['model']>
  getStargateInformation: (path: getStargateInformation['path'], query: getStargateInformation['query'], headers: getStargateInformation['headers'], url: getStargateInformation['url']) => Promise<getStargateInformation['responses'][200]['model']>
  getStarInformation: (path: getStarInformation['path'], query: getStarInformation['query'], headers: getStarInformation['headers'], url: getStarInformation['url']) => Promise<getStarInformation['responses'][200]['model']>
  getStationInformation: (path: getStationInformation['path'], query: getStationInformation['query'], headers: getStationInformation['headers'], url: getStationInformation['url']) => Promise<getStationInformation['responses'][200]['model']>
  listAllPublicStructures: (query: listAllPublicStructures['query'], headers: listAllPublicStructures['headers'], url: listAllPublicStructures['url']) => Promise<listAllPublicStructures['responses'][200]['model']>
  getStructureInformation: (path: getStructureInformation['path'], query: getStructureInformation['query'], headers: getStructureInformation['headers'], url: getStructureInformation['url']) => Promise<getStructureInformation['responses'][200]['model']>
  getSystemJumps: (query: getSystemJumps['query'], headers: getSystemJumps['headers'], url: getSystemJumps['url']) => Promise<getSystemJumps['responses'][200]['model']>
  getSystemKills: (query: getSystemKills['query'], headers: getSystemKills['headers'], url: getSystemKills['url']) => Promise<getSystemKills['responses'][200]['model']>
  getSolarSystems: (query: getSolarSystems['query'], headers: getSolarSystems['headers'], url: getSolarSystems['url']) => Promise<getSolarSystems['responses'][200]['model']>
  getSolarSystemInformation: (path: getSolarSystemInformation['path'], query: getSolarSystemInformation['query'], headers: getSolarSystemInformation['headers'], url: getSolarSystemInformation['url']) => Promise<getSolarSystemInformation['responses'][200]['model']>
  getTypes: (query: getTypes['query'], headers: getTypes['headers'], url: getTypes['url']) => Promise<getTypes['responses'][200]['model']>
  getTypeInformation: (path: getTypeInformation['path'], query: getTypeInformation['query'], headers: getTypeInformation['headers'], url: getTypeInformation['url']) => Promise<getTypeInformation['responses'][200]['model']>
}
