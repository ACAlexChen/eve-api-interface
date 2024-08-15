/**
 * @type GET
 * @description List orders in a region
 *
 * @link /markets/{region_id}/orders/
 * @alias /dev/markets/{region_id}/orders/
 * @alias /legacy/markets/{region_id}/orders/
 * @alias /v1/markets/{region_id}/orders/
 *
 * Return a list of orders in a region
 * This route is cached for up to 300 seconds
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 *
 * @param { string } order_type
 * Filter buy/sell orders, return all orders by default. If you query without type_id, we always return both buy and sell orders
 *
 * @param { number } page
 * Which page of results to return
 *
 * @param { number } region_id
 * Return orders in this region
 *
 * @param { number } type_id
 * Return orders only for this type
 */
export interface listOrdersInARegion {
  url: '/markets/{region_id}/orders/' | '/dev/markets/{region_id}/orders/' | '/legacy/markets/{region_id}/orders/' | '/v1/markets/{region_id}/orders/'

  path: {
    region_id: number
  }

  query: {
    datasource?: 'tranquility'
    order_type: 'buy' | 'sell' | 'all'
    page?: number
    type_id?: number
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'A list of orders'
      model: {
        duration: number
        is_buy_order: boolean
        issued: string
        location_id: number
        min_volume: number
        order_id: number
        price: number
        range: string
        system_id: number
        type_id: number
        volume_remain: number
        volume_total: number
      }[]
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
        'X-Pages': number
      }
    }
    400: {
      description: 'Bad request'
      model: {
        error: string
      }
    }
    404: {
      description: 'Not found'
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
    422: {
      description: 'Not found'
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
export const listOrdersInARegion = {
  200: 'A list of orders',
  304: 'Not modified',
  400: 'Bad request',
  404: 'Not found',
  420: 'Error limited',
  422: 'Not found',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get item groups
 *
 * @link /markets/groups/
 * @alias /dev/markets/groups/
 * @alias /legacy/markets/groups/
 * @alias /v1/markets/groups/
 *
 * Get a list of item groups
 * This route expires daily at 11:05
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 */
export interface getItemGroups {
  url: '/markets/groups/' | '/dev/markets/groups/' | '/legacy/markets/groups/' | '/v1/markets/groups/'
  query: {
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
 * @description List markets prices
 *
 * @link /markets/prices/
 * @alias /dev/markets/prices/
 * @alias /legacy/markets/prices/
 * @alias /v1/markets/prices/
 *
 * Return a list of prices
 * This route is cached for up to 3600 seconds
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 */
export interface listMarketsPrices {
  url: '/markets/prices/' | '/dev/markets/prices/' | '/legacy/markets/prices/' | '/v1/markets/prices/'
  query: {
    datasource?: 'tranquility'
  }
  headers: {
    'If-None-Match'?: string
  }
  responses: {
    200: {
      description: 'A list of prices'
      model: {
        adjusted_price?: number
        average_price?: number
        type_id: number
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
export const listMarketsPrices = {
  200: 'A list of prices',
  304: 'Not modified',
  400: 'Bad request',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}


/**
 * @type GET
 * @description List open orders from a character
 *
 * @link /characters/{character_id}/orders/
 * @alias /dev/characters/{character_id}/orders/
 * @alias /v2/characters/{character_id}/orders/
 *
 * Requires the following scope: esi-markets.read_character_orders.v1
 * List open market orders placed by a character
 * This route is cached for up to 1200 seconds
 *
 * @param { string } character_id
 * An EVE character ID
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 *
 * @param { string } token
 * Access token to use if unable to set a header
 */
export interface listOpenOrdersFromACharacter {
  url: '/characters/{character_id}/orders/' | '/dev/characters/{character_id}/orders/' | '/v2/characters/{character_id}/orders/'
  path: {
    character_id: number
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
      description: 'Open market orders placed by a character'
      model: {
        duration: number
        escrow?: number
        is_buy_order?: boolean
        is_corporation: boolean
        issued: string
        location_id: number
        min_volume?: number
        order_id: number
        price: number
        range: string
        region_id: number
        type_id: number
        volume_remain: number
        volume_total: number
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
        sso_status?: number
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
export const listOpenOrdersFromACharacter = {
  200: 'Open market orders placed by a character',
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
 * @description List historical orders by a character
 *
 * @link /characters/{character_id}/orders/history/
 * @alias /dev/characters/{character_id}/orders/history/
 * @alias /legacy/characters/{character_id}/orders/history/
 * @alias /v1/characters/{character_id}/orders/history/
 *
 * Requires the following scope: esi-markets.read_character_orders.v1
 * List cancelled and expired market orders placed by a character up to 90 days in the past.
 * This route is cached for up to 3600 seconds
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
 * @param { string } token
 * Access token to use if unable to set a header
 *
 * @param { number } page
 * Which page of results to return
 */
export interface listHistoricalOrdersByACharacter {
  url: '/characters/{character_id}/orders/history/' | '/dev/characters/{character_id}/orders/history/' | '/legacy/characters/{character_id}/orders/history/' | '/v1/characters/{character_id}/orders/history/'
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
      description: 'Expired and cancelled market orders placed by a character'
      model: {
        duration: number
        escrow?: number
        is_buy_order?: boolean
        is_corporation: boolean
        issued: string
        location_id: number
        min_volume?: number
        order_id: number
        price: number
        range: string
        region_id: number
        state: string
        type_id: number
        volume_remain: number
        volume_total: number
      }[]
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
        'X-Pages': number
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
        sso_status?: number
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
export const listHistoricalOrdersByACharacter = {
  200: 'Expired and cancelled market orders placed by a character',
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
 * @description List open orders from a corporation
 *
 * @link /corporations/{corporation_id}/orders/
 * @alias /dev/corporations/{corporation_id}/orders/
 * @alias /v3/corporations/{corporation_id}/orders/
 *
 * Requires the following scope: esi-markets.read_corporation_orders.v1
 * List open market orders placed on behalf of a corporation
 * This route is cached for up to 1200 seconds
 * Requires one of the following EVE corporation role(s): Accountant, Trader
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
 * @param { string } token
 * Access token to use if unable to set a header
 *
 * @param { number } page
 * Which page of results to return
 */
export interface listOpenOrdersFromACorporation {
  url: '/corporations/{corporation_id}/orders/' | '/dev/corporations/{corporation_id}/orders/' | '/v3/corporations/{corporation_id}/orders/'

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
      description: 'A list of open market orders'
      model: {
        duration: number
        escrow?: number
        is_buy_order?: boolean
        issued: string
        issued_by: number
        location_id: number
        min_volume?: number
        order_id: number
        price: number
        range: string
        region_id: number
        type_id: number
        volume_remain: number
        volume_total: number
        wallet_division: number
      }[]
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
        sso_status?: number
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
export const listOpenOrdersFromACorporation = {
  200: 'A list of open market orders',
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
 * @description List historical orders from a corporation
 *
 * @link /corporations/{corporation_id}/orders/history/
 * @alias /dev/corporations/{corporation_id}/orders/history/
 * @alias /v2/corporations/{corporation_id}/orders/history/
 *
 * Requires the following scope: esi-markets.read_corporation_orders.v1
 * List cancelled and expired market orders placed on behalf of a corporation up to 90 days in the past.
 * This route is cached for up to 3600 seconds
 * Requires one of the following EVE corporation role(s): Accountant, Trader
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
 * @param { string } token
 * Access token to use if unable to set a header
 *
 * @param { number } page
 * Which page of results to return
 */
export interface listHistoricalOrdersFromACorporation {
  url: '/corporations/{corporation_id}/orders/history/' | '/dev/corporations/{corporation_id}/orders/history/' | '/v2/corporations/{corporation_id}/orders/history/'

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
      description: 'Expired and cancelled market orders placed on behalf of a corporation'
      model: {
        duration: number
        escrow?: number
        is_buy_order?: boolean
        issued: string
        issued_by: number
        location_id: number
        min_volume?: number
        order_id: number
        price: number
        range: string
        region_id: number
        state: string
        type_id: number
        volume_remain: number
        volume_total: number
        wallet_division: number
      }[]
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
        sso_status?: number
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
export const listHistoricalOrdersFromACorporation = {
  200: 'Expired and cancelled market orders placed on behalf of a corporation',
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
 * @description List historical market statistics in a region
 *
 * @link /markets/{region_id}/history/
 * @alias /dev/markets/{region_id}/history/
 * @alias /legacy/markets/{region_id}/history/
 * @alias /v1/markets/{region_id}/history/
 *
 * Return a list of historical market statistics for the specified type in a region
 * This route expires daily at 11:05
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 *
 * @param { number } region_id
 * Return statistics in this region
 *
 * @param { number } type_id
 * Return statistics for this type
 */
export interface listHistoricalMarketStatisticsInARegion {
  url: '/markets/{region_id}/history/' | '/dev/markets/{region_id}/history/' | '/legacy/markets/{region_id}/history/' | '/v1/markets/{region_id}/history/'

  path: {
    region_id: number
  }

  query: {
    datasource?: 'tranquility'
    type_id: number
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'A list of historical market statistics'
      model: {
        average: number
        date: string
        highest: number
        lowest: number
        order_count: number
        volume: number
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
    404: {
      description: 'Type not found'
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
    422: {
      description: 'Not found'
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
    520: {
      description: 'Internal error thrown from the EVE server'
      model: {
        error?: string
      }
    }
  }
}
export const listHistoricalMarketStatisticsInARegion = {
  200: 'A list of historical market statistics',
  304: 'Not modified',
  400: 'Bad request',
  404: 'Type not found',
  420: 'Error limited',
  422: 'Not found',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout',
  520: 'Internal error thrown from the EVE server'
}

/**
 * @type GET
 * @description List type IDs relevant to a market
 *
 * @link /markets/{region_id}/types/
 * @alias /dev/markets/{region_id}/types/
 * @alias /legacy/markets/{region_id}/types/
 * @alias /v1/markets/{region_id}/types/
 *
 * Return a list of type IDs that have active orders in the region, for efficient market indexing.
 * This route is cached for up to 600 seconds
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 *
 * @param { number } region_id
 * Return statistics in this region
 *
 * @param { number } page
 * Which page of results to return
 */
export interface listTypeIDsRelevantToAMarket {
  url: '/markets/{region_id}/types/' | '/dev/markets/{region_id}/types/' | '/legacy/markets/{region_id}/types/' | '/v1/markets/{region_id}/types/'

  path: {
    region_id: number
  }

  query: {
    datasource?: 'tranquility'
    page?: number
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'A list of type IDs'
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
    404: {
      description: 'Not found'
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
export const listTypeIDsRelevantToAMarket = {
  200: 'A list of type IDs',
  304: 'Not modified',
  400: 'Bad request',
  404: 'Not found',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get item group information
 *
 * @link /markets/groups/{market_group_id}/
 * @alias /dev/markets/groups/{market_group_id}/
 * @alias /legacy/markets/groups/{market_group_id}/
 * @alias /v1/markets/groups/{market_group_id}/
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
 * @param { string } Accept-Language
 * Language to use in the response
 *
 * @param { number } market_group_id
 * An Eve item group ID
 */
export interface getItemGroupInformation {
  url: '/markets/groups/{market_group_id}/' | '/dev/markets/groups/{market_group_id}/' | '/legacy/markets/groups/{market_group_id}/' | '/v1/markets/groups/{market_group_id}/'

  path: {
    market_group_id: number
  }

  query: {
    datasource?: 'tranquility'
  }

  headers: {
    'If-None-Match'?: string
    'Accept-Language'?: string
  }

  responses: {
    200: {
      description: 'Information about an item group'
      model: {
        description: string
        market_group_id: number
        name: string
        parent_group_id?: number
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
      description: 'Not found'
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
  404: 'Not found',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description List orders in a structure
 *
 * @link /markets/structures/{structure_id}/
 * @alias /dev/markets/structures/{structure_id}/
 * @alias /legacy/markets/structures/{structure_id}/
 * @alias /v1/markets/structures/{structure_id}/
 *
 * Requires the following scope: esi-markets.structure_markets.v1
 * Return all orders in a structure
 * This route is cached for up to 300 seconds
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 *
 * @param { number } structure_id
 * Return orders in this structure
 *
 * @param { number } page
 * Which page of results to return
 *
 * @param { string } token
 * Access token to use if unable to set a header
 */
export interface listOrdersInAStructure {
  url: '/markets/structures/{structure_id}/' | '/dev/markets/structures/{structure_id}/' | '/legacy/markets/structures/{structure_id}/' | '/v1/markets/structures/{structure_id}/'

  path: {
    structure_id: number
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
      description: 'A list of orders'
      model: {
        duration: number
        is_buy_order: boolean
        issued: string
        location_id: number
        min_volume: number
        order_id: number
        price: number
        range: string
        type_id: number
        volume_remain: number
        volume_total: number

      }[]
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
        sso_status?: number
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
export const listOrdersInAStructure = {
  200: 'A list of orders',
  304: 'Not modified',
  400: 'Bad request',
  401: 'Unauthorized',
  403: 'Forbidden',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

export interface Market {
  listOrdersInARegion: (path: listOrdersInARegion['path'], query: listOrdersInARegion['query'], headers: listOrdersInARegion['headers'], url: listOrdersInARegion['url']) => Promise<listOrdersInARegion['responses'][200]['model']>
  getItemGroups: (query: getItemGroups['query'], headers: getItemGroups['headers'], url: getItemGroups['url']) => Promise<getItemGroups['responses'][200]['model']>
  listMarketsPrices: (query: listMarketsPrices['query'], headers: listMarketsPrices['headers'], url: listMarketsPrices['url']) => Promise<listMarketsPrices['responses'][200]['model']>
  listOpenOrdersFromACharacter: (path: listOpenOrdersFromACharacter['path'], query: listOpenOrdersFromACharacter['query'], headers: listOpenOrdersFromACharacter['headers'], url: listOpenOrdersFromACharacter['url']) => Promise<listOpenOrdersFromACharacter['responses'][200]['model']>
  listHistoricalOrdersByACharacter: (path: listHistoricalOrdersByACharacter['path'], query: listHistoricalOrdersByACharacter['query'], headers: listHistoricalOrdersByACharacter['headers'], url: listHistoricalOrdersByACharacter['url']) => Promise<listHistoricalOrdersByACharacter['responses'][200]['model']>
  listOpenOrdersFromACorporation: (path: listOpenOrdersFromACorporation['path'], query: listOpenOrdersFromACorporation['query'], headers: listOpenOrdersFromACorporation['headers'], url: listOpenOrdersFromACorporation['url']) => Promise<listOpenOrdersFromACorporation['responses'][200]['model']>
  listHistoricalOrdersFromACorporation: (path: listHistoricalOrdersFromACorporation['path'], query: listHistoricalOrdersFromACorporation['query'], headers: listHistoricalOrdersFromACorporation['headers'], url: listHistoricalOrdersFromACorporation['url']) => Promise<listHistoricalOrdersFromACorporation['responses'][200]['model']>
  listHistoricalMarketStatisticsInARegion: (path: listHistoricalMarketStatisticsInARegion['path'], query: listHistoricalMarketStatisticsInARegion['query'], headers: listHistoricalMarketStatisticsInARegion['headers'], url: listHistoricalMarketStatisticsInARegion['url']) => Promise<listHistoricalMarketStatisticsInARegion['responses'][200]['model']>
  listTypeIDsRelevantToAMarket: (path: listTypeIDsRelevantToAMarket['path'], query: listTypeIDsRelevantToAMarket['query'], headers: listTypeIDsRelevantToAMarket['headers'], url: listTypeIDsRelevantToAMarket['url']) => Promise<listTypeIDsRelevantToAMarket['responses'][200]['model']>
  getItemGroupInformation: (path: getItemGroupInformation['path'], query: getItemGroupInformation['query'], headers: getItemGroupInformation['headers'], url: getItemGroupInformation['url']) => Promise<getItemGroupInformation['responses'][200]['model']>
  listOrdersInAStructure: (path: listOrdersInAStructure['path'], query: listOrdersInAStructure['query'], headers: listOrdersInAStructure['headers'], url: listOrdersInAStructure['url']) => Promise<listOrdersInAStructure['responses'][200]['model']>
}
