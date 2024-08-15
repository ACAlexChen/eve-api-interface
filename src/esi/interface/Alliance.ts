/**
 * @type GET
 * @description List all alliances
 *
 * @link /alliances/
 * @alias /dev/alliances/
 * @alias /legacy/alliances/
 * @alias /v1/alliances/
 * @alias /v2/alliances/
 *
 * List all active player alliances
 * This route is cached for up to 3600 seconds
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 */
export interface listAllAlliances {
  url: '/alliances/' | '/dev/alliances/' | '/legacy/alliances/' | '/v1/alliances/' | '/v2/alliances/'

  query: {
    datasource?: 'tranquility'
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'List of Alliance IDs'
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
export const listAllAlliances = {
  200: 'List of Alliance IDs',
  304: 'Not modified',
  400: 'Bad request',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description Get alliance information
 *
 * @link /alliances/{alliance_id}/
 * @alias /dev/alliances/{alliance_id}/
 * @alias /legacy/alliances/{alliance_id}/
 * @alias /v3/alliances/{alliance_id}/
 * @alias /v4/alliances/{alliance_id}/
 *
 * Public information about an alliance
 * This route is cached for up to 3600 seconds
 *
 * @param { number } alliance_id
 * An EVE alliance ID
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 */
export interface getAllianceInformation {
  url: '/alliances/{alliance_id}/' | '/dev/alliances/{alliance_id}/' | '/legacy/alliances/{alliance_id}/' | '/v3/alliances/{alliance_id}/' | '/v4/alliances/{alliance_id}/'

  path: {
    alliance_id: number
  }

  query: {
    datasource?: 'tranquility'
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'Public data about an alliance'
      model: {
        creator_corporation_id: number
        creator_id: number
        date_founded: string
        executor_corporation_id?: number
        faction_id?: number
        name: string
        ticker: string
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
      description: 'Alliance not found'
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
export const getAllianceInformation = {
  200: 'Public data about an alliance',
  304: 'Not modified',
  400: 'Bad request',
  404: 'Alliance not found',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @type GET
 * @description List alliance's corporations
 *
 * @link /alliances/{alliance_id}/corporations/
 * @alias /dev/alliances/{alliance_id}/corporations/
 * @alias /legacy/alliances/{alliance_id}/corporations/
 * @alias /v1/alliances/{alliance_id}/corporations/
 * @alias /v2/alliances/{alliance_id}/corporations/
 *
 * List all corporations that are a member of the given alliance
 * This route is cached for up to 3600 seconds
 *
 * @param { number } alliance_id
 * An EVE alliance ID
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 */
export interface listAllianceCorporations {
  url: '/alliances/{alliance_id}/corporations/' | '/dev/alliances/{alliance_id}/corporations/' | '/legacy/alliances/{alliance_id}/corporations/' | '/v1/alliances/{alliance_id}/corporations/' | '/v2/alliances/{alliance_id}/corporations/'

  path: {
    alliance_id: number
  }

  query: {
    datasource?: 'tranquility'
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'List of corporation IDs'
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
export const listAllianceCorporations = {
  200: 'List of corporation IDs',
  304: 'Not modified',
  400: 'Bad request',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

/**
 * @warning 此路线即将更新
 * @type GET
 * @description Get alliance icon
 *
 * @link /alliances/{alliance_id}/icons/
 * @alias /legacy/alliances/{alliance_id}/icons/
 * @alias /v1/alliances/{alliance_id}/icons/
 *
 * Get the icon urls for a alliance
 * This route expires daily at 11:05
 *
 * @param { number } alliance_id
 * An EVE alliance ID
 *
 * @param { string } datasource
 * The server name you would like data from
 *
 * @param { string } If-None-Match
 * ETag from a previous request. A 304 will be returned if this matches the current ETag
 */
export interface getAllianceIcon {
  url: '/alliances/{alliance_id}/icons/' | '/legacy/alliances/{alliance_id}/icons/' | '/v1/alliances/{alliance_id}/icons/'

  path: {
    alliance_id: number
  }

  query: {
    datasource?: 'tranquility'
  }

  headers: {
    'If-None-Match'?: string
  }

  responses: {
    200: {
      description: 'Icon URLs for the given alliance id and server'
      model: {
        px128x128: string
        px64x64: string
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
      description: 'Alliance not found'
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
export const getAllianceIcon = {
  200: 'Icon URLs for the given alliance id and server',
  304: 'Not modified',
  400: 'Bad request',
  404: 'Alliance not found',
  420: 'Error limited',
  500: 'Internal server error',
  503: 'Service unavailable',
  504: 'Gateway timeout'
}

export interface Alliance {
  listAllAlliances: (query: listAllAlliances['query'], headers: listAllAlliances['headers'], url: listAllAlliances['url']) => Promise<listAllAlliances['responses'][200]['model']>
  getAllianceInformation: (path: getAllianceInformation['path'], query: getAllianceInformation['query'], headers: getAllianceInformation['headers'], url: getAllianceInformation['url']) => Promise<getAllianceInformation['responses'][200]['model']>
  listAllianceCorporations: (path: listAllianceCorporations['path'], query: listAllianceCorporations['query'], headers: listAllianceCorporations['headers'], url: listAllianceCorporations['url']) => Promise<listAllianceCorporations['responses'][200]['model']>
  getAllianceIcon: (path: getAllianceIcon['path'], query: getAllianceIcon['query'], headers: getAllianceIcon['headers'], url: getAllianceIcon['url']) => Promise<getAllianceIcon['responses'][200]['model']>
}
